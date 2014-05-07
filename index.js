var email = require('emailjs');

module.exports={

	SendMail:function(email_add, body, subject, email_from, email_bcc, email_cc, callback) 
	{
	    var server  = email.server.connect({
	       user:    'drumbi', 
	       password:'drumbi192', 
	       host:    'smtp.sendgrid.net', 
	       ssl:     false,
	       port:    25
	    });

	    var mail_from=(email_from)? 'email_from':'noreply@drumbi.com';
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