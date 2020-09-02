
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8080

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.listen(port, () => {
  console.log('JSON Server is running')
})

server.get('/home', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/home.json')
    response.status(200).jsonp(users)
  }
})

server.get('/image', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/image.json')
    response.status(200).jsonp(users)
  }
})

server.get('/text', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/text.json')
    response.status(200).jsonp(users)
  }
})

server.get('/error', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/error.json')
    response.status(200).jsonp(users)
  }
})

server.get('/listview', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/listview.json')
    response.status(200).jsonp(users)
  }
})

server.get('/modal', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/modal.json')
    response.status(200).jsonp(users)
  }
})

server.get('/input', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/input.json')
    response.status(200).jsonp(users)
  }
})

server.get('/touchable', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/touchable.json')
    response.status(200).jsonp(users)
  }
})

server.get('/loading', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/loading.json')
    response.status(200).jsonp(users)
  }
})

server.get('/tabbar', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/tabbar.json')
    response.status(200).jsonp(users)
  }
})

server.get('/lazy', (request, response) => {
  if (request.method === 'GET') {
    const users = require('./payloads/lazy.json')
    response.status(200).jsonp(users)
  }
})
