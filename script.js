
function displayTime() {
    var rightNow = moment();
    $("#currentDay").text(rightNow.format('MMM DD, YYYY [at] hh:mm:ss a'));
  
  }

  setInterval(displayTime, 1000);