var currentDate = new Date().getTime();
var countDownDate = new Date(currentDate + 30*60000);

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementsByClassName('timer')[0].innerHTML =  minutes + "m " + seconds + "s ";
    console.log(minutes);
  // If the count down is finished, write some text

}, 1000);