var $ = require('jquery');
var Contact = require('./models/contact');

$(document).ready(function(){
  var Router = require('./routes/router');

  $('body').on('click', 'a', function (e){
    e.preventDefault();
    var href = $(this).attr('href').substr(1);
    Router.navigate(href, {trigger:true});
  });
  $("#container").on("click", "#button", function (e){
  	e.preventDefault();
  	var contact = new Contact({
  });

  	contact.set({
    "fname": $("#fname").val(),
    "lname": $("#lname").val(),
    "email": $("#email").val(),
    "phone": $("#phone").val(),
    "city": $("#city").val(),
    "state": $("#state").val(),
    "picture": $("#picture").val(),
  });
  contact.save();
  })
});