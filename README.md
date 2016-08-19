# _Template_

#### By _Ryan Loos_

## Description

_A template website that has confirmed functional Javascript, CSS, Bootstrap (v3.3.7), and jQuery(v3.1.0)_

## Setup/Installation Requirements

* _Copy the repository from GitHub_
* _Open the index.html file a browser of your choice_
* _Open the console to confirm that javascript and jQuery are running_

## Behavior Driven Development
* _form prevents user from entering non-numeric characters_
  * Example Input: 'apple'
  * Example Output: system does not register input
* _when user inputs number, system generates a list of all preceding numbers including the inputted one, and pushes them to an array_
  * Example Input: 5
  * Example Output: [1,2,3,4,5]
* _loop goes through each number if it is divisible by 3 replaces it with 'ping'_
  * Example Input: [1,2,3,4,5]
  * Example Output: [1,2,ping,4,5]
* _same loop goes through each number if it is divisible by 5 replaces it with 'pong'_
  * Example Input: [1,2,ping,4,5]
  * Example Output: [1,2,ping,4,pong]
* _same loop goes through each number and if both previous conditions were true replaces it with 'ping-pong'_
  * Example Input: [10,11,12,13,14,15]
  * Example Output: [pong,11,ping,13,14,ping-pong]
* _prints string to empty ul tag on the page_
  * Example Input: pong 11 ping 13 14 ping-pong
  * Example Output: <li>pong</li> <li>11</li> <li>ping</li> <li>13</li> <li>14</li> <li>ping-pong</li>
* _when user enters a different number, page generates a new list_
  * Example Input: (first input 45), now input 5
  * Example Output: 1,2,ping,4,pong


## GitHub link
https://github.com/rloos289/PingPong


## Licensing

* MIT

Copyright (c) 2016 **_Ryan Loos_**
