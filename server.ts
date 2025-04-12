const server = Bun.serve({
  hostname: process.env["HOST"] || "localhost",
  port: Number(process.env["PORT"]) || 4200,
  async fetch(req) {
    const url = new URL(req.url);
    const filePath = `./dist/portfolio/browser/${url.pathname}`;

    try {
      // Si le fichier existe (ex: image, css, js), on le sert
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }

      // Sinon, on sert index.html (Angular va router)
      const indexFile = Bun.file("./dist/portfolio/browser/index.html");
      return new Response(indexFile, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    } catch (e) {
      return new Response("Internal Server Error", { status: 500 });
    }
  },
});

console.log(`🚀 Server running on http://${server.hostname}:${server.port}`);
