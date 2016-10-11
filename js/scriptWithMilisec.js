var hours = document.getElementsByClassName('hours');
var minutes = document.getElementsByClassName('minutes');
var seconds = document.getElementsByClassName('seconds');
var milisec = document.getElementsByClassName('miliseconds');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var stopButton = document.getElementById('stop');
var intervalId;

function startMiliSec () {
  startButton.hidden = true;
  pauseButton.hidden = false;
  startButton.value = 'Cont.';
  var ms = +milisec[0].innerHTML;
  ms++;
  milisec[0].innerHTML = '00' + ms;
  if (ms > 9) milisec[0].innerHTML = '0' + ms;
  if (ms > 99) milisec[0].innerHTML = ms;
  if (ms == 999) {
    milisec[0].innerHTML = '000';
    startTimer();
  }
}


function startTimer() {
  var sec = +seconds[0].innerHTML;
  var min = +minutes[0].innerHTML;
  var h = +hours[0].innerHTML;

  sec++;
  seconds[0].innerHTML = '0' + sec;
  if (sec > 9) seconds[0].innerHTML = sec;
  if (sec == 60) {
    seconds[0].innerHTML = '00';
    min++;
  }
  minutes[0].innerHTML = '0' + min;
  if (min > 9) minutes[0].innerHTML = min;
  if (min == 60) {
    minutes[0].innerHTML = '00';
    h++;
  }
  hours[0].innerHTML = '0' + h;
  if (h > 9) hours[0].innerHTML = h;
}

function begin() {
  intervalId = setInterval(startTimer, 1000);
}

function beginMiliseconds () {
  miliId = setInterval(startMiliSec, 1);
}

function pauseFun() {
  clearInterval(miliId);
  startButton.hidden = false;
  pauseButton.hidden = true;
}

function stopTimer() {
  clearInterval(miliId);
  seconds[0].innerHTML = '00';
  minutes[0].innerHTML = '00';
  hours[0].innerHTML = '00';
  milisec[0].innerHTML = '000';
  startButton.hidden = false;
  pauseButton.hidden = true;
  startButton.value = 'Start';
}


startButton.addEventListener("click", beginMiliseconds);
// startButton.addEventListener("click", begin);
pauseButton.addEventListener("click", pauseFun);
stopButton.addEventListener("click", stopTimer);
