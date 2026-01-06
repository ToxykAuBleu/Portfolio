import { AngularAppEngine, createRequestHandler } from "@angular/ssr";

const angularApp = new AngularAppEngine();
export default createRequestHandler((req: Request) => {
  return angularApp.handle(req);
});

if (typeof Bun !== "undefined" && import.meta.main) {
  const hostname = process.env["HOST"] ?? "localhost";
  const port = Number(process.env["PORT"] ?? 4000);

  Bun.serve({
    hostname,
    port,
    fetch: async (req: Request) => {
      const res = await angularApp.handle(req);
      return res ?? new Response("Not Found", { status: 404 });
    },
  });

  console.log(`🚀 Server running on http://${hostname}:${port}`);
}
