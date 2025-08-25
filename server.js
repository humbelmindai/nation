// 420 Nation - Production Server for Plesk Node.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Initialize Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`🚀 420 Nation Platform running on http://${hostname}:${port}`);
      console.log('🌿 Cannabis wellness platform is ready!');
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Graceful shutdown initiated');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Graceful shutdown initiated');
  process.exit(0);
});