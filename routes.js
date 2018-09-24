const routes = require('next-routes')

module.exports = routes()                           // ----   ----      -----
.add('about')                                       // about  about     /about
.add('blog')
.add('index', 'index', '/')