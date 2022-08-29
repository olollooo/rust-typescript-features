const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/users', { target: 'http://127.0.0.1:3000' }))
  app.use(proxy('/users', { target: 'http://localhost:3000' }))
}