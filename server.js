var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    yaml = require('js-yaml'),
    connect = require('connect'),
    request = require('request'),
    async = require('async'),
    routes = require('./config/routes.yml').routes

var requestHandler = function(req, res, next) {

  if ((req.method == 'POST') && (req.url == '/v1/emails/sendgrid')) {

    var recipient = req.body.to && req.body.to
      .replace(/<.*>/, '')
      .replace(/\"/g, '')
      .trim()

    if (!recipient) {
      res.statusCode = 400
      res.end("Please specify recipient.")
      next()
    }

    var appPostUrl = routes[recipient]
    if (!appPostUrl) {
      res.statusCode = 500
      res.end("Could not determine application route for specified recipient")
      next()
    }

    console.log("Routing email for " + recipient + " to " + appPostUrl)

    if (appPostUrl) {

      var body = req.body
      
      var files = []
      for (fileId in req.files) {
        files.push(req.files[fileId])
      }
    
      async.map(
        files,
        function(file, cb) {
          fs.readFile(file.path, null, function(err, buf) {
            var data = {}
            data[file.name] = buf.toString('base64')
            cb(err, data)
          })
        },
        function(err, attachments) {

          if (err) {
            res.statusCode = 500
            res.end("Could not process attachments")
          }

          for (filename in attachments) {
            body[filename] = attachments[filename]
          }
          
          request.post(appPostUrl, { json: body }, function(err, response, body) {
            if (err) {
              res.statusCode = 503
              res.end("Could not route email")
            }
          }).pipe(res)

        })

    } else {
      res.statusCode = 404
      res.end("Could not find application for specified recipient")
      next()
    }

  } else {
    
    res.statusCode = 404
    res.end("Resource not found at " + req.url)
    next()
    
  }
  
}

var app = connect()
  .use(connect.multipart())
  .use(connect.urlencoded())
  .use(requestHandler)

http.createServer(app).listen(process.env.PORT || 3000)
