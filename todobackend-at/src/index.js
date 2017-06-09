import http from 'http';

http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}).listen(10000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:10000/'); // eslint-disable-line no-console
