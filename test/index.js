var should = require('chai').should(),
    mailer = require('../index'),
    sendmail = mailer.SendMail;

describe('#SendMail', function() {
  it('Should Send Email to Recipient', function() 
  {

    sendmail('dna.belmer@gmail.com','Test mail','xmail test','','','',function(err,data) 
    {
      data.should.equal('success');
    });

  });
});