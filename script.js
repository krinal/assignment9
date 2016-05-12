//This script generates a clock display with text as Red for Odd Minutes and text as Blue for Even Minutes
//The background for clock display toggles between Black and Yellow every 2 seconds
//The font size changes randomly from a value stored in an array

$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    $("#txt").html(h + ":" + m + ":" + s + ampm)
    setTimeout(startTime, 500);
    changeColor(m);
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  startTime();
});

function changeColor(m){
if ((m%2) >0){
        $("#txt").css('color', 'red');
    } else {
      $("#txt").css('color', 'blue');
    }
}


function backgroundCheck() {

setTimeout(backgroundCheck, 2000);
changeBackground();


}

function changeBackground() {
  if ($("#txt").css('background-color')=== "rgb(0, 0, 0)") {
      console.log("yellow")
      $("#txt").css('background-color', 'yellow');
    } else {
      console.log("black")
      $("#txt").css('background-color', 'black');

    }

}
backgroundCheck();


function fontCheck() {

setTimeout(fontCheck, 5000);
changeFont();

}

function changeFont() {

  var fontArray = [50,100,200];
  var s = fontArray.length;
  var random = Math.floor((Math.random() * s) + 1);
      
  $("#txt").css('fontSize', fontArray[random]);

}
    
fontCheck();



