$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    // var access_token = '5438be46d1284c55fe5cda3186cb6aa83c10b0cf' // Replace this with a Github access token that you can generate as explained here https://help.github.com/articles/creating-an-access-token-for-command-line-use/
    var url = 'https://api.github.com/users/' + $('input.username').val() + "?access_token=" + access_token;

    var template = $('template').html();

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
    }).fail(function() {
      $('.container').prepend("User not found")
    }).always(function() {
      $('input.username').val('');
      });
  });
})