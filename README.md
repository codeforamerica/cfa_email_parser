## Introduction
This is a service that receives email for your application at an email address that looks like `<something>@parser.codeforamerica.org`, parses it and calls a webhook defined by your application.

## How to use
Lets say you want your application to receive email, perhaps a report that is being emailed out by a city agency once a week.

The first thing you will need is an email address where your city agency can send their weekly report email. You can choose an email address that looks like `<something>@parser.codeforamerica.org`, where `<something>` is unique and specific to your application (e.g. louisville-jail-reports@parser.codeforamerica.org).

Next you will need to define an HTTP API resource that can accept POST requests with `Content-Type: application/www-form-urlencoded`. This POST request will contain the contents of the email, but parsed into [various fields](http://sendgrid.com/docs/API_Reference/Webhooks/parse.html#-Parameters).

Finally, you will need to associate the email address you chose with the URI of the HTTP API resource you created. This association is made in the `config/routes.yml` file, by adding a line that looks like this:

   `louisville-jail-reports@parser.codeforamerica.org: http://yourapp.com/resource/to/handle/parsed/email`

## How this works
[![How this works](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=RW1haWwgc2VuZGVyIC0-IHVuaXF1ZS1hcHAtcmVjaXBpZW50XG5AcGFyc2VyLmNvZGVmb3JhbWVyaWNhLm9yZzogADwGdG8geW91ciBhcHAtc3BlY2lmaWMgZQBYBWFkZHJlc3MKACswIC0-IG14LnNlbmRncmlkLm5ldABmCG92ZXIgU01UUAoAEg8gLT4gImh0dHA6Ly9jZmEtAIExB2hlcm9rdWFwcC5jb21cbi92MS8AgRcFcy8AVggiOiBQYXJzZWQAgS4HAF0FSFRUUCBQT1NUCgAeNgCBAgx5b3VyAHcKc29tZS9wYXRoL3RoYXQveW91L2RlZmluZQBpHw&s=roundgreen)](http://www.websequencediagrams.com/?lz=RW1haWwgc2VuZGVyIC0-IHVuaXF1ZS1hcHAtcmVjaXBpZW50XG5AcGFyc2VyLmNvZGVmb3JhbWVyaWNhLm9yZzogADwGdG8geW91ciBhcHAtc3BlY2lmaWMgZQBYBWFkZHJlc3MKACswIC0-IG14LnNlbmRncmlkLm5ldABmCG92ZXIgU01UUAoAEg8gLT4gImh0dHA6Ly9jZmEtAIExB2hlcm9rdWFwcC5jb21cbi92MS8AgRcFcy8AVggiOiBQYXJzZWQAgS4HAF0FSFRUUCBQT1NUCgAeNgCBAgx5b3VyAHcKc29tZS9wYXRoL3RoYXQveW91L2RlZmluZQBpHw&s=roundgreen)

## When to use this service?
Consider using this service in development and staging environments. In production environments, you should probably switch to using [SendGrid's Inbound Parse Webhook](http://sendgrid.com/docs/API_Reference/Webhooks/parse.html) directly.

