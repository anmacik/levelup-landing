var currentDate = new Date().getTime();
var countDownDate = new Date(currentDate + 30*60000);

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementsByClassName('timer')[0].innerHTML =  minutes + "m " + seconds + "s ";
    console.log(minutes);

}, 1000);
