import { AngularAppEngine, createRequestHandler } from "@angular/ssr";

const angularApp = new AngularAppEngine();
export default createRequestHandler(async (req: Request) => {
  return angularApp.handle(req);
});

type SupportedEncoding = "zstd" | "deflate" | "gzip";
const mimeTypes: Record<string, string> = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  json: "application/json",
  woff2: "application/font-woff2",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  ico: "image/x-icon",
  txt: "text/plain",
};

function isCompressibleContentType(contentType: string | null): boolean {
  if (!contentType) return false;
  return (
    (contentType.startsWith("text/") && !contentType.includes("text/plain")) ||
    contentType.includes("application/javascript") ||
    contentType.includes("application/json") ||
    contentType.includes("application/font-woff2") ||
    contentType.includes("image/svg+xml")
  );
}

// Add Accept-Encoding to Vary header.
function withVary(headers: Headers) {
  const vary = headers.get("Vary");
  if (!vary) headers.set("Vary", "Accept-Encoding");
  else if (!vary.toLowerCase().includes("accept-encoding"))
    headers.set("Vary", `${vary}, Accept-Encoding`);
}

// Check if the request accepts a given encoding.
function acceptsEncoding(req: Request, encoding: SupportedEncoding): boolean {
  const acceptedEncoding = req.headers.get("accept-encoding") ?? "";
  return new RegExp(`\\b${encoding}\\b`, "i").test(acceptedEncoding);
}

// Pick the best encoding supported by both client and server.
function pickBestEncoding(req: Request): SupportedEncoding | null {
  if (acceptsEncoding(req, "zstd")) return "zstd";
  if (acceptsEncoding(req, "gzip")) return "gzip";
  if (acceptsEncoding(req, "deflate")) return "deflate";
  return null;
}

// Compress bytes using the specified encoding.
function compressBytes(
  encoding: SupportedEncoding,
  bytes: Uint8Array<ArrayBuffer>,
): Uint8Array<ArrayBuffer> {
  if (encoding === "gzip")
    return Bun.gzipSync(bytes) as Uint8Array<ArrayBuffer>;
  if (encoding === "deflate")
    return Bun.deflateSync(bytes) as Uint8Array<ArrayBuffer>;
  return Bun.zstdCompressSync(bytes, { level: 6 }) as Uint8Array<ArrayBuffer>;
}

// Tries to compress the response based on request headers and content type.
async function maybeCompress(req: Request, res: Response): Promise<Response> {
  const encoding = pickBestEncoding(req);
  if (!encoding) return res;

  const headers = new Headers(res.headers);
  const contentType = headers.get("Content-Type");

  if (!isCompressibleContentType(contentType)) return res;
  if (headers.has("Content-Encoding")) return res;

  const body = res.body;
  if (!body) return res;

  const arrayBuffer = await new Response(body).arrayBuffer();
  const input = new Uint8Array(arrayBuffer) as Uint8Array<ArrayBuffer>;

  // Avoid compression on tiny payloads.
  if (input.byteLength < 256) return res;

  let output: Uint8Array<ArrayBuffer>;
  try {
    output = compressBytes(encoding, input);
  } catch {
    // If compression fails for any reason, fall back to the original response.
    return res;
  }

  withVary(headers);
  headers.set("Content-Encoding", encoding);
  headers.delete("Content-Length");

  return new Response(output, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

// Start web server.
if (typeof Bun !== "undefined" && import.meta.main) {
  const hostname = process.env["HOST"] ?? "localhost";
  const port = Number(process.env["PORT"] ?? 4000);

  Bun.serve({
    hostname,
    port,
    fetch: async (req: Request) => {
      const url = new URL(req.url);
      const fileRequest = url.pathname.slice(1);

      // Check if request is a file/asset.
      if (fileRequest.includes(".")) {
        const file = Bun.file(
          new URL(`../browser/${fileRequest}`, import.meta.url),
        );
        if (await file.exists()) {
          const ext = (fileRequest.split(".").pop() || "").toLowerCase();
          const mime = mimeTypes[ext] || "application/octet-stream";
          let res = new Response(file, { headers: { "Content-Type": mime } });
          res = await maybeCompress(req, res);
          return res;
        }
      }

      // Render file based on the request.
      const res = await angularApp.handle(req);
      if (res) return await maybeCompress(req, res);

      // FIXME: redirect to route /not-found.
      return new Response("Not Found", { status: 404 });
    },
  });

  console.log(`🚀 Server running on http://${hostname}:${port}`);
}
