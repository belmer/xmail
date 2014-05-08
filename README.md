xmail
=====

A small library providing utility method to send email

## Release History

Create a file on your root application directory called mail.json. This will hold the configuration for your mail server.
``` 
{
	"user":"<mail server username>",
	"password":"<mail server password>",
	"host":"<smpt host server>",
	"ssl":"<use ssl?>",
	"port":"<port number>",
	"noreply_from":"from field will be replaced by this whenever the from field is not specified."
}
```

That's it! Include this in your application just any other node modules.

And ohh! The only method there is is "SendMail", just provide few params and that's it. Here's an example:
```SendMail(email_to, body, subject, email_from, email_bcc, email_cc,,callbackfunction(err,response){});```

## Release History

* 0.1.0 Initial release