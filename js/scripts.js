//<!-- Back End -->
var numbers = [];

function listNumbers(input) {
  for (i = 1; i < input; i++) {
    numbers.push(i);
  }
  console.log(numbers);
}
//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var userNumber = $('#userNumber').val();
    listNumbers(userNumber);
  });
});
