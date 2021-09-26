var presentTime = moment();

function updateClock() {
    $("#currentDay").text(presentTime.format("dddd, MMMM Do HH:mm:ss"));
}

setInterval(updateClock, 1000);

// create a function to update time every second