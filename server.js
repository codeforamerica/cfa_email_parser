var restify = require('restify'),
    resources = require(__dirname + '/restapi/resources')

// Define server
var server = restify.createServer({
  name: 'cfa-parser-api',
  version: '0.0.1'
})

server.use(restify.bodyParser())

// Routes
server.post('/v1/emails/sendgrid', resources.v1.emails_sendgrid.post)

// Start server
server.listen(process.env.PORT || 3000, function() {
  console.log("%s listening at %s", server.name, server.url)
})
