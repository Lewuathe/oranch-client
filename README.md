oranch-client
=============

Log receiving module with oranch. This module uses oranch npm module. 
Oranch tracks any format logfiles. Therefore oranch-client supports
tasks that invoked by oranch log-tracking.

## How to install

    $ npm install oranch-client

## Services
oranch-client will support many tasks however now only supports mail-service.

### mail-service

#### Usage
First you need to set mail service configuration.
Mail service configuration is below. oranch-client mail service
now supports GMail transporter.

* `user` : GMail account name
* `pass` : GMail account password
* `from` : Envelope <from> header
* `to`   : Envelope <to> header
* `subject` : Envelope <subject> header
* `logfile` : Tracking target logfile name
* `match` : Matching condition written in RegExp

#### Example

    var OranchClient = require('oranch-client');

	var config = {
	    service  : 'mail',
		user     : 'someone@gmail.com'
		pass     : 'somepassword',
		from     : 'Production server <prod.com>',
		to       : 'your_mail_address@example.com',
		subject  : 'Hello, World!',
		schedule : '*/3 * * * * *',
		logfile  : __dirname + '/logfile.log',
		match    : '/ERROR/'
	};

	var client = new OranchClient(config);
	client.mail.start();

## License

[MIT License](http://opensource.org/license/mit-license.php "MIT License")




