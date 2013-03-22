## Introduction
This is a service that receives email for your application over SMTP, parses it and calls a webhook defined by your application.

## How to use
Lets say you want your application to receive email, perhaps a report that is being emailed out by a city agency once a week.

The first thing you will need is an email address where your city agency can send their weekly report email. You can choose an email address that looks like `<something>@parser.codeforamerica.org`, where `<something>` is unique and specific to your application (e.g. louisville-jail-reports@parser.codeforamerica.org).

Next you will need to define an HTTP API resource that can accept POST requests with `Content-Type: application/www-form-urlencoded`. This POST request will contain the contents of the email, but parsed into [various fields](http://sendgrid.com/docs/API_Reference/Webhooks/parse.html#-Parameters).

Finally, you will need to associate the email address you chose with the URI of the HTTP API resource you created. This association is made in the `config/routes.yml` file, by adding a line that looks like this:

   `louisville-jail-reports@parser.codeforamerica.org: http://yourapp.com/resource/to/handle/parsed/email`
How 
## How this works
[![How this works](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=RW1haWwgc2VuZGVyIC0-IHVuaXF1ZS1hcHAtcmVjaXBpZW50XG5AcGFyc2UuY29kZWZvcmFtZXJpY2Eub3JnOiAAOwZ0byB5b3VyIGFwcC1zcGVjaWZpYyBlAFcFYWRkcmVzcwoAKy8gLT4gbXguc2VuZGdyaWQubmV0AGUIb3ZlciBTTVRQCgASDyAtPiAiaHR0cDovLwCBGhhcbi92MS8AgRYFcy8AVggiOiBQYXJzZWQAgS0HAF0FSFRUUCBQT1NUCgAeNgCBAgx5b3VyYXBwLmNvbVxuL3NvbWUvcGF0aC90aGF0L3lvdS9kZWZpbmUAaR8&s=roundgreen)](http://www.websequencediagrams.com/?lz=RW1haWwgc2VuZGVyIC0-IHVuaXF1ZS1hcHAtcmVjaXBpZW50XG5AcGFyc2UuY29kZWZvcmFtZXJpY2Eub3JnOiAAOwZ0byB5b3VyIGFwcC1zcGVjaWZpYyBlAFcFYWRkcmVzcwoAKy8gLT4gbXguc2VuZGdyaWQubmV0AGUIb3ZlciBTTVRQCgASDyAtPiAiaHR0cDovLwCBGhhcbi92MS8AgRYFcy8AVggiOiBQYXJzZWQAgS0HAF0FSFRUUCBQT1NUCgAeNgCBAgx5b3VyYXBwLmNvbVxuL3NvbWUvcGF0aC90aGF0L3lvdS9kZWZpbmUAaR8&s=roundgreen)
