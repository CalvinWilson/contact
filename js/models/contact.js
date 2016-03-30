var Backbone = require('../lib/backbone-parse/backbone-parse');

var Contact = Backbone.Model.extend({
  _parse_class_name: 'Contact',
});

module.exports = Contact;
