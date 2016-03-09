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

