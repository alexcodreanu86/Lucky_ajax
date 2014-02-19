$(document).ready(function () {
  $('input').on('click', function(e){
    e.preventDefault();
    var die = Math.floor((Math.random() * 6 + 1));
    $.ajax({
      type: "POST",
      url: '/rolls',
      data: {value: die}
    }).done(function(){
      $('img').attr("src", die + '.png')
    // })

  })
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
