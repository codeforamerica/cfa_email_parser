var fs = require('fs'),
    http = require('http'),
    yaml = require('js-yaml'),
    connect = require('connect'),
    request = require('request'),
    routes = require('./config/routes.yml').routes

var app = connect()
  .use(connect.urlencoded())
  .use(connect.logger())
  .use(function(req, res) {

    if ((req.method == 'POST') && (req.url == '/v1/emails/sendgrid')) {

      console.log(req.body)

      var recipient = req.body.to
      var appPostUrl = routes[recipient]

      if (appPostUrl) {
        request.post(appPostUrl).form(req.body).pipe(res)
      } else {
        res.statusCode = 404
        res.end("Could not find application for specified recipient")
      }
    }
    
  })

http.createServer(app).listen(process.env.PORT || 3000)
