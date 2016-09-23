// alert('hey dan!');
/*
Set up your files as such, this is a good programming practice.
(function(){
  "use strict";


}());
*/

(function(){
  "use strict";

  var colorHover = document.getElementById('hover-time');
  var hours = document.querySelector('.elapsed-time .hours');
  var minutes = document.querySelector('.elapsed-time .minutes');
  var seconds = document.querySelector('.elapsed-time .seconds');

  // function logElapsedTime(){
  //   var currentTime = new Date();
  //   // var elapsedTime = currentTime ;
  //   var elapsed = millisecondsToInterval(currentTime);
  //   // console.log(currentTime);
  //   // console.log(60/currentTime);      Trying to get the percentages of a minute for time.
  //   displayInterval(elapsed);
  // }
  // logElapsedTime();
  //   window.setInterval(logElapsedTime, 1000);

/*
Found get minutes command via following website.
http://www.w3schools.com/jsref/jsref_getminutes.asp
*/
  var minutePercentage = function myFunction(number) {
      var d = new Date();
      var n = (d.getSeconds()/60*100).toFixed();
      document.getElementById('myBar').style.width = n + '%';
      // console.log(n);
  }
minutePercentage();
window.setInterval(minutePercentage, 1000);


  // function millisecondsToInterval(ms){ //1000
  //   var msLeft = ms; // => 1000
  //   var msInHour = 60000 * 60; // 3,600,000
  //   var msInMinute = 60000;
  //   var msInSecond = 1000;
  //   var hourCount = Math.floor(msLeft / msInHour);
  //   msLeft = msLeft % msInHour;
  //   var minuteCount = Math.floor(msLeft / msInMinute);
  //   msLeft = msLeft % msInMinute;
  //   var secondCount = Math.floor(msLeft / msInSecond);
  //   return [hourCount, minuteCount, secondCount];
  // }



function displayInterval(){
  var time = new Date();
  var hrs = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  hours.textContent = ("0" + hrs).slice(-2);
  minutes.textContent = ("0" + mins).slice(-2);
  seconds.textContent = ("0" + secs).slice(-2);
}

displayInterval();
window.setInterval(displayInterval, 1000);

  function displayHex(){
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    hours.textContent = ("0" + hrs.toString(16)).slice(-2);
    minutes.textContent = ("0" + mins.toString(16)).slice(-2);
    seconds.textContent = ("0" + secs.toString(16)).slice(-2);
  }

  function colorHoverHandler(){
    console.log();
    window.setInterval(logElapsedTime, 1000);
  }

colorHover.addEventListener('mouseover', function(){hover = true});
colorHover.addEventListener('mouseout', function(){hover = false});

var hover = false;

function change(){
  var time = new Date();
  var hrs = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();

  var bgcolor = "#" + ("0" + hrs.toString(16)).slice(-2) + ("0" + mins.toString(16)).slice(-2) + ("0" + secs.toString(16)).slice(-2)
  console.log(bgcolor);

  if(hover==true){
    displayHex();
    document.getElementById('bgcolor').style.backgroundColor = bgcolor;

  } else {
    displayInterval();
    document.getElementById('bgcolor').style.backgroundColor = "white";
  };
}

window.setInterval(change, 100);

}());
