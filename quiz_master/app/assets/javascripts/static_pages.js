// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function () {
  var bindSignin = function () {
    $('#signin-form').on('submit', function (e) {
      e.preventDefault();

      var user = {
        email   : $('#signin-form [name="email"]').val(),
        password: $('#signin-form [name="password"]').val()
      };

      $.auth.emailSignIn(user).then(function(user) {
        console.log(user)
        window.location.href = '/';
      }).fail(function(resp) {
        console.log(resp)
      });
    });
  };

  var bindSignup = function () {
    $('#signup-form').on('submit', function (e) {
      e.preventDefault();
      $('#signup-form-message').text('');

      var user = {
        email   : $('#signup-form [name="email"]').val(),
        username: $('#signup-form [name="username"]').val(),
        password: $('#signup-form [name="password"]').val(),
        password_confirm: $('#signup-form [name="password"]').val()
      };

      $.auth.emailSignUp(user).then(function(user) {
        console.log(user)
      }).fail(function(resp) {
        console.log(resp)
      });
    });
  };

  var bindLogout = function () {
    $('#logout-button').on('click', function (e) {
      e.preventDefault();
      $.auth.signOut().then(function(user) {
        console.log(user)
        window.location.href = '/';
      }).fail(function(resp) {
        console.log(resp)
        window.location.href = '/';
      });
    });
  };

  var init = function () {
    bindSignin();
    bindSignup();
    bindLogout();
  };

  init();
});