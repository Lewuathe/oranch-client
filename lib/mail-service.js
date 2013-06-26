/*
 *   class MailClient  
 *
 *   @author Kai Sasaki <lewuathe@me.com>
 *   @date   2013/06/20
 *
 */
var nodemailer = require('nodemailer');
var Oranch = require('oranch').Oranch;

function sendMailTask(transporter, mailOptions) {
	return function(line) {
		mailOptions.text = line;
		transporter.sendMail(mailOptions, function(err, response){
			if (err) {
				console.warn(error);
			}
			else {
				console.warn('Message send: ' + response.message);
			}
		});
	};
}

var MailClient = module.exports = function(config) {
	var self = this;
	self.config = config;
	self.transporter = nodemailer.createTransport("SMTP", {
		service : "Gmail",
		auth : {
			user : config.user,
			pass : config.pass
		}
	});

	self.mailOptions = {
		from    : config.from,
		to      : config.to,
		subject : config.subject,
	};
	self.oranch = new Oranch({
		schedule : config.schedule,
		logfile  : config.logfile,
		match    : config.match,
		task     : sendMailTask(self.transporter, self.mailOptions),
		onComplete : function() { console.log('Completed!!'); }
	});

}


MailClient.prototype.start = function() {
	var self = this;
	self.oranch.start();
}

MailClient.prototype.stop = function() {
	var self = this;
	self.transporter.close();
	self.oranch.stop();
}

MailClient.prototype.debug = function() {
	var self = this;
	console.log(self.config);
}
