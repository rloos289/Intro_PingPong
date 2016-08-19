//<!-- Back End -->
var numbers = [];

//generates list of numbers and pushes it to empty array
function listNumbers(input) {
  numbers = [];
  for (i = 1; i < input; i++) {
    numbers.push(i);
  } return numbers;
}

//translates certain numbers into ping, pong, and pingpong
function pingPongChange (numbers) {
  for (i = 1; i < numbers.length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.splice(i-1,1, 'pingpong');
    } else if (i % 3 === 0) {
      numbers.splice([i-1],1, 'ping');
    } else if (i % 5 === 0) {
      numbers.splice([i-1],1, 'pong');
    }
  }
}

//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    $('li#resultList').remove();
    var userNumber = $('#userNumber').val();
    pingPongChange(listNumbers(userNumber));
    numbers.forEach(function(numbers) {
    $('#results').append('<li id=resultList>' + numbers + '</li>');
    });
  });
});
