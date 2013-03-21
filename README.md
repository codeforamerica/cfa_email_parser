## Introduction
This is a service that receives email for your application over SMTP, parses it and calls a webhook defined by your application.

## How to use
Edit `config/routes.yml` and add a line that looks like this:

   `louisville-jail-reports@parser.codeforamerica.org: http://yourapp.com/some/path/that/you/define`

Make sure that the recipient email address used in the line above is unique to your application and isn't already taken.

Setup your application receive HTTP POST requests on the URL defined in the line above. The resource at this URL will receive [these parameters](http://sendgrid.com/docs/API_Reference/Webhooks/parse.html#-Parameters) with `Content-Type: application/www-form-urlencoded`.

## How this works
[![How this works](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=RW1haWwgc2VuZGVyIC0-IHVuaXF1ZS1hcHAtcmVjaXBpZW50XG5AcGFyc2UuY29kZWZvcmFtZXJpY2Eub3JnOiAAOwZ0byB5b3VyIGFwcC1zcGVjaWZpYyBlAFcFYWRkcmVzcwoAKy8gLT4gbXguc2VuZGdyaWQubmV0AGUIb3ZlciBTTVRQCgASDyAtPiAiaHR0cDovLwCBGhhcbi92MS8AgRYFcy8AVggiOiBQYXJzZWQAgS0HAF0FSFRUUCBQT1NUCgAeNgCBAgx5b3VyYXBwLmNvbVxuL3NvbWUvcGF0aC90aGF0L3lvdS9kZWZpbmUAaR8&s=roundgreen)](http://www.websequencediagrams.com/?lz=RW1haWwgc2VuZGVyIC0-IHVuaXF1ZS1hcHAtcmVjaXBpZW50XG5AcGFyc2UuY29kZWZvcmFtZXJpY2Eub3JnOiAAOwZ0byB5b3VyIGFwcC1zcGVjaWZpYyBlAFcFYWRkcmVzcwoAKy8gLT4gbXguc2VuZGdyaWQubmV0AGUIb3ZlciBTTVRQCgASDyAtPiAiaHR0cDovLwCBGhhcbi92MS8AgRYFcy8AVggiOiBQYXJzZWQAgS0HAF0FSFRUUCBQT1NUCgAeNgCBAgx5b3VyYXBwLmNvbVxuL3NvbWUvcGF0aC90aGF0L3lvdS9kZWZpbmUAaR8&s=roundgreen)
