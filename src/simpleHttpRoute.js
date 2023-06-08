import http from "node:http"

const PORT = 3333
const HOSTNAME = "127.0.0.1"
const routes = {
  '/api/v1/create': 'Create resource',
  '/api/v1/read': 'Read resource',
  '/api/v1/update': 'Update resource',
  '/api/v1/delete': 'Delete resource',
}; // Interface like

const notFoundRoute = {
  status: 404,
  message: 'Not Found',
}

const server = http.createServer((request, response) => {
  const { url } = request
  const routeHandler = routes[url]

  if (routeHandler) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(routeHandler);
    response.end();
    return
  }

  response.writeHead(notFoundRoute.status, { 'Content-Type': 'text/html' });
  response.write(notFoundRoute.message);
  response.end();
})

server.listen(PORT, HOSTNAME)
