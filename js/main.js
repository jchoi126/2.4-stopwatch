// alert('hey dan!');
/*
Set up your files as such, this is a good programming practice.
(function(){
  "use strict";


}());
*/

(function(){
  "use strict";


//   var timeOnPage = document.getElementById("time");
//
//   var currentTime = new Date();
//   console.log(currentTime)
//
//   timeOnPage.textContent = currentTime;
//
// function timeHandler(){
//     currentTime = new Date();
//     console.log("currentTime")
//   }
//
// timeOnPage.addEventListener("load",timeHandler)




  var colorHover = document.getElementById('hover-time');
  var hours = document.querySelector('.elapsed-time .hours');
  var minutes = document.querySelector('.elapsed-time .minutes');
  var seconds = document.querySelector('.elapsed-time .seconds');

  // var startTime;
  // var currentText;

  function colorHoverHandler(){
    console.log();
    // toggleButton();
    window.setInterval(logElapsedTime, 1000);
  }

  function logElapsedTime(){
    var currentTime = new Date();
    // var elapsedTime = currentTime ;
    var elapsed = millisecondsToInterval(currentTime);
    console.log(currentTime);
    // console.log(60/currentTime);      Trying to get the percentages of a minute for time.
    displayInterval(elapsed);
  }

/*
Found get minutes command via following website.
http://www.w3schools.com/jsref/jsref_getminutes.asp
*/
  var minutePercentage = function myFunction(number) {
      var d = new Date();
      var n = d.getMinutes()/60*100;
      console.log(n);
  }
window.setInterval(minutePercentage, 1000);


  function millisecondsToInterval(ms){ //1000
    var msLeft = ms; // => 1000
    var msInHour = 60000 * 60; // 3,600,000
    var msInMinute = 60000;
    var msInSecond = 1000;
    var hourCount = Math.floor(msLeft / msInHour); // => 26
    msLeft = msLeft % msInHour;  // => 1000 / 3,600,000 =
    var minuteCount = Math.floor(msLeft / msInMinute);
    msLeft = msLeft % msInMinute;
    var secondCount = Math.floor(msLeft / msInSecond);
    return [hourCount, minuteCount, secondCount];
  }

  function displayInterval(interval){
    hours.textContent = ("0" + interval[0]).slice(-2);
    minutes.textContent = ("0" + interval[1]).slice(-2);
    seconds.textContent = ("0" + interval[2]).slice(-2);
  }

  // function toggleButton(){
  //   currentText = colorHover.textContent;
  // }

logElapsedTime();

  window.setInterval(logElapsedTime, 1000);


  colorHover.addEventListener('mouseover', colorHoverHandler);

  function move() {
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
          } else {
              width++;
              elem.style.width = width + '%';
          }
      }
  }


}());
