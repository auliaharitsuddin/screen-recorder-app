// Server statis minimal (stdlib saja) — getDisplayMedia butuh secure context,
// localhost dianggap secure context oleh browser, file:// tidak.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };

http.createServer((req, res) => {
  const reqPath = req.url === '/' ? 'index.html' : req.url;
  const filePath = path.join(__dirname, reqPath);
  // Tolak path traversal (../) — pastikan hasil resolve tetap di dalam __dirname.
  if (!filePath.startsWith(__dirname + path.sep) && filePath !== __dirname) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'text/plain' });
    res.end(data);
  });
}).listen(PORT, '127.0.0.1', () => console.log(`Buka http://localhost:${PORT}`));
