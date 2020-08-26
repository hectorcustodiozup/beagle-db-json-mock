
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

// {
//   "_beagleComponent_":"beagle:container",
//   "children":[
//     {
//       "_beagleComponent_":"beagle:text",
//       "text":"TEXT",
//       "textColor":"#873647",
//       "style": {
//         "flex": {
//           "flexDirection": "COLUMN",
//           "alignItems": "CENTER",
//           "justifyContent": "CENTER"
//         },
//         "positionType":"relative",
//         "position": {
//           "top": {
//             "value": 10,
//             "type": "REAL"
//           },
//           "left": {
//             "value": 10,
//             "type": "REAL"
//           }
//         },
//         "margin": {
//           "top": {
//             "value": 100,
//             "type": "REAL"
//           },
//           "left": {
//             "value": 10,
//             "type": "REAL"
//           }
//         }
//       }
//     }
//   ]
// }