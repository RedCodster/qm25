// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about sinported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-deparam/jquery-deparam.js
//= require jquery-cookie/jquery.cookie.js
//= require pubsub-js/src/pubsub.js
//= require j-toker/dist/jquery.j-toker.js
//= require twitter/bootstrap
//= require_tree .

$.auth.configure({
  apiUrl: 'http://localhost:3000'
})

$('#signup-form').on('submit', function() {
  $.auth.emailSignUp({
    email: $('#signup-form input[name="email"]').val(),
    password: $('#signup-form input[name="password"]').val(),
    password_confirmation: $('#signup-form input[name=password_confirmation"]').val()
  }).then(function(user) {
    alert('Welcome ' + user.name + '!');
  }).fail(function(resp) {
    alert('Authentication failure: ' + resp.errors.join(' '));
  });
});

$('#signin-form').on('submit', function() {
  $.auth.emailSignIn({
    email: $('#signin-form input[name="email"]').val(),
    password: $('#signin-form input[name="password"]').val(),
  }).then(function(user) {
    alert('Welcome back' + user.name + '!');
  }).fail(function(resp) {
    alert('Authentication failure: ' + resp.errors.join(' '));
  });
});

$('#image-form').on('submit', function(e) {
  e.preventDefault();
  var formData = new FormData();
  var imageFile = $('#upload-image input[name="image"]')[0].files[0];
  formData.append('user[image]', imageFile);

  $.ajax({
    method: 'POST',
    url: '/save_image',
    dataType:"JSON",
    cache: false,
    contentType: false,
    data: formData,
    success: function(resp){
      console.log(resp);
    },
    error: function(resp) {
      console.log(resp)
    }
  })
})

