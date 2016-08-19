//<!-- Back End -->
var numbers = [];

function listNumbers(input) {
  for (i = 1; i < input; i++) {
    numbers.push(i);
  }
}

function pingPongChange (numbers) {
  for (i = 1; i < numbers.length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.splice(i-1,1, 'pingpong');
    } else if (i % 3 === 0) {
      numbers.splice([i-1],1, 'ping');
    } else if (i % 5 === 0) {
      numbers.splice([i-1],1, 'pong');
    }
  console.log(numbers);
  }
}

//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var userNumber = $('#userNumber').val();
    listNumbers(userNumber);
  });
});
