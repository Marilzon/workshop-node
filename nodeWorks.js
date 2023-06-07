import http from "node:http"
const PORT = 3333
const HOSTNAME = '127.0.0.1'

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" })
  response.write("Node Works!")
  response.end()
})

server.listen(PORT, HOSTNAME)
