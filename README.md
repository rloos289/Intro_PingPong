# _Template_

#### By _Ryan Loos_

## Description

_A template website that has confirmed functional Javascript, CSS, Bootstrap (v3.3.7), and jQuery(v3.1.0)_

## Setup/Installation Requirements

* _Copy the repository from GitHub_
* _Open the index.html file a browser of your choice_
* _Open the console to confirm that javascript and jQuery are running_

## Behavior Driven Development
-form returns false if a non-numeric character is entered
  * Example Input: 'apple'
  * Example Output: 'false'
-when user inputs number, system generates a list of all preceding numbers including the inputted one
  * Example Input: 5
  * Example Output: 1,2,3,4,5
-list of numbers is split into an array
  * Example Input: 1,2,3,4,5
  * Example Output: [1,2,3,4,5]
-loop goes through each number if it is divisible by 3 replaces it with 'ping'
  * Example Input: [1,2,3,4,5]
  * Example Output: [1,2,ping,4,5]
-same loop goes through each number if it is divisible by 5 replaces it with 'pong'
  * Example Input: [1,2,ping,4,5]
  * Example Output: [1,2,ping,4,pong]
-same loop goes through each number and if both previous conditions were true replaces it with 'ping-pong'
  * Example Input: [10,11,12,13,14,15]
  * Example Output: [pong,11,ping,13,14,ping-pong]
-combines array back into string with spaces between numbers and words
  * Example Input: [pong,11,ping,13,14,ping-pong]
  * Example Output: pong 11 ping 13 14 ping-pong
-prints string to empty ul tag on the page
  * Example Input: pong 11 ping 13 14 ping-pong
  * Example Output: *pong *11 *ping *13 *14 *ping-pong

## GitHub link
https://github.com/rloos289/PingPong


## Licensing

* MIT

Copyright (c) 2016 **_Ryan Loos_**
