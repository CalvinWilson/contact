var Backbone = require('../lib/backbone-parse/backbone-parse');
var FormTemplate = require('../../templates/form.html');
var ContactList = require("../../templates/contact-list.html")
var SingleView = require ("../../templates/single-view.html")
var Contact = require('../models/contact');
var Contacts = require("../collections/contacts")
var $ = require('jquery');
require('font-awesome/css/font-awesome.min.css');

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start();
  },
  routes: {
    '': 'index',
    'contact/:contactId': 'contact',
    "new": "new"
  },
  index: function () {
    Contacts.fetch({
    success: function (contacts){
      var data = { contacts: contacts.toJSON() };
      $("#container").html(ContactList(data));
    }
  })
  }
});

var router = new Router();

router.on('route:contact', function (contactId){
  var contact = new Contact({
    objectId: contactId
  });
  contact.fetch({
    success: function (contact){
      console.log(contact);
      $("#container").html(SingleView(contact));
    }
  })
})

router.on("route:new", function(){
  $("#container").html(FormTemplate);
  
})

module.exports = router;