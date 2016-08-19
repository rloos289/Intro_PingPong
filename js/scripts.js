//<!-- Back End -->

//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var userNumber = $('#userNumber').val();
    console.log(userNumber);
  });
});
