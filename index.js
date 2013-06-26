/*
 *   class OranchClient
 *
 *   @author Kai Sasaki <lewuathe@me.com>
 *   @date   2013/06/20
 *
 */

var OranchClient = module.exports = function(config) {
	var self = this;

	self.service = config.service;

	var serviceClt = require('./lib/' + self.service + '-service.js');
	self[self.service] = new serviceClt(config);
}


