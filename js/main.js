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

  console.log(seconds);

  var startTime;
  var currentText;


  function colorHoverHandler(){
    console.log('You clicked the button');
    startTime = new Date();
    toggleButton();


    window.setInterval(logElapsedTime, 1000);
  }

  function logElapsedTime(){
    var currentTime = new Date();
    var elapsedTime = currentTime ;
    var elasped = millisecondsToInterval(elapsedTime);

    displayInterval(elasped);
  }

  function millisecondsToInterval(ms){
    var msLeft = ms;

    var msInHour = 60000 * 60;
    var msInMinute = 60000;
    var msInSecond = 1000;

    // We can devide two numbers using a forward slash
    // We can use Math.floor() to chop off decimal values after doing math
    var hourCount = Math.floor(msLeft / msInHour);

    /*
    Besides regular division we can do modulo division which returns the remainder
    */
    msLeft = msLeft % msInHour;

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

  function toggleButton(){
    currentText = colorHover.textContent;
  }

  colorHover.addEventListener('mouseover', colorHoverHandler);



}());
