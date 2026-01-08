import { AngularAppEngine, createRequestHandler } from "@angular/ssr";

const angularApp = new AngularAppEngine();
export default createRequestHandler((req: Request) => {
  return angularApp.handle(req);
});

if (typeof Bun !== "undefined" && import.meta.main) {
  const mimeTypes: Record<string, string> = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    svg: "image/svg+xml",
    ico: "image/x-icon",
    txt: "text/plain",
  };

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
          return new Response(file, { headers: { "Content-Type": mime } });
        }
      }

      // Render file based on the request.
      const res = await angularApp.handle(req);
      if (res) {
        return res;
      } else {
        // FIXME: redirect to route /not-found.
        return new Response("Not Found", { status: 404 });
      }
    },
  });

  console.log(`🚀 Server running on http://${hostname}:${port}`);
}
