import { extname, join, normalize } from 'node:path';

const root = join(import.meta.dir, '..', 'dist');
const contentTypes: Record<string, string> = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

const server = Bun.serve({
  hostname: '127.0.0.1',
  port: 4173,
  async fetch(request) {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const normalizedPath = normalize(relativePath);

    if (normalizedPath.startsWith('..')) return new Response('Not found', { status: 404 });

    const file = Bun.file(join(root, normalizedPath));
    if (!(await file.exists())) return new Response('Not found', { status: 404 });

    return new Response(file, {
      headers: { 'content-type': contentTypes[extname(normalizedPath)] ?? 'application/octet-stream' },
    });
  },
});

console.log(`Serving built site at ${server.url}`);
