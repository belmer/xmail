var email = require('emailjs'),
  	nconf = require('nconf');

module.exports=
{

	SendMail:function(email_add, body, subject, email_from, email_bcc, email_cc, callback) 
	{
		// Get mail server configuration from mail.json config
		nconf.argv()
		     .env()
		     .add( 'user', {file:process.cwd()+'/mail.json', type: 'file'});

		var server  = email.server.connect({
	       user:    nconf.get('user'), 
	       password:nconf.get('password'), 
	       host:    nconf.get('host'), 
	       ssl:     nconf.get('ssl'),
	       port:    nconf.get('port')
	    });

	    var mail_from=(email_from)? email_from:nconf.get('noreply_from');

		//Build Payload
		var payLoad = 
		{
		   text:    body,
		   from:    mail_from, 
		   to:      email_add,
		   cc:      email_cc,
		   bcc:     email_bcc,
		   subject: subject,
		   attachment:
		   [
		        {data:body,alternative:true}
		   ]
		}

		payLoad.to = email_add;

		// send the message and get a callback with an error or details of the message that was sent
		server.send(payLoad, function(err, message) 
		{        
		    if(err) 
		    {
		    	console.log('Send email error');
		        callback(err, null);
		    }
		    else
		    {
		    	console.log('Send email success');
		        callback(null, 'success');
		    }
		}); 
	}
};