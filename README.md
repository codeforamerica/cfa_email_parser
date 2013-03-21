## Introduction
This is a service that receives email for your application over SMTP, parses it and calls a webhook defined by your application.

## How to use
Edit config/routes.yml and add a line that looks like this:

   `louisville-jail-reports@parse.codeforamerica.org: http://yourapp.com/some/path/that/you/define`

Make sure that the recipient email address used in the line above is unique to your application and isn't already taken.

Setup your application receive HTTP POST requests on the URL defined in the line above. The resource at this URL will receive (these parameters)[http://sendgrid.com/docs/API_Reference/Webhooks/parse.html#-Parameters] with `Content-Type: application/www-form-urlencoded`.

## How this works
Email is sent to unique-app-recipient@parse.codeforamerica.org

   1. Email -> unique-app-recipient@parse.codeforamerica.org: Email to your app-specific email address
   2. parse.codeforamerica.org -> mx.sendgrid.net: Email over SMTP
   2. mx.sendgrid.net -> http://parse.codeforamerica.org/v1/emails/sendgrid: parsed email over HTTP POST
   3. http://parse.codeforamerica.org/v1/emails/sendgrid -> http://yourapp.com/some/path/that/you/define: parsed email over HTTP POST
