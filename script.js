// Setting var for each input line
var taskNineAM = $('#taskNineAM');
var taskTenAM = $('#taskTenAM');
var taskElevenAM = $('#taskElevenAM');
var taskNoon = $('#taskNoon');
var taskOnePM = $('#taskOnePM');
var taskTwoPM = $('#taskTwoPM');
var taskThreePM = $('#taskThreePM');
var taskFourPM = $('#taskFourPM');
var taskFivePM = $('#taskFivePM');

// Setting var for each save button
var buttonNineAM = $('#buttonNineAM');
var buttonTenAM = $('#buttonTenAM');
var buttonElevenAM = $('#buttonElevenPM');
var buttonNoon = $('#buttonNoon');
var buttonOnePM = $('#buttonOnePM');
var buttonTwoPM = $('#buttonTwoPM');
var buttonThreePM = $('#buttonThreePM');
var buttonFourPM = $('#buttonFourPM');
var buttonFivePM = $('#buttonFivePM');


// adding events on click for each button
// task Nine AM
$('#buttonNineAM').click(function() {
    localStorage.setItem("taskNineAM", taskNineAM.val())
    ;
              
     })
     
     $('#taskNineAM').text(localStorage.getItem("taskNineAM"));

// task Ten AM
$('#buttonTenAM').click(function() {
    localStorage.setItem("taskTenAM", taskTenAM.val())
    ;
              
     })
     
     $('#taskTenAM').text(localStorage.getItem("taskTenAM"));

// task Eleven AM
$('#buttonElevenPM').click(function() {
    localStorage.setItem("taskElevenAM", taskElevenAM.val())
    ;
              
     })
     
     $('#taskElevenAM').text(localStorage.getItem("taskElevenAM"));

// task Noon
$('#buttonNoon').click(function() {
    localStorage.setItem("taskNoon", taskNoon.val())
    ;
              
     })
     
     $('#taskNoon').text(localStorage.getItem("taskNoon"));

// task One PM
$('#buttonOnePM').click(function() {
    localStorage.setItem("taskOnePM", taskOnePM.val())
    ;
              
     })
     
     $('#taskOnePM').text(localStorage.getItem("taskOnePM"));

// task Two PM
$('#buttonTwoPM').click(function() {
    localStorage.setItem("taskTwoPM", taskTwoPM.val())
    ;
              
     })
     
     $('#taskTwoPM').text(localStorage.getItem("taskTwoPM"));

// task Three PM
$('#buttonThreePM').click(function() {
    localStorage.setItem("taskThreePM", taskThreePM.val())
    ;
              
     })
     
     $('#taskThreePM').text(localStorage.getItem("taskThreePM"));

// task Four PM
$('#buttonFourPM').click(function() {
    localStorage.setItem("taskFourPM", taskFourPM.val())
    ;
              
     })
     
     $('#taskFourPM').text(localStorage.getItem("taskFourPM"));

// task Five PM
$('#buttonFivePM').click(function() {
    localStorage.setItem("taskFivePM", taskFivePM.val())
    ;
              
     })
     
    $('#taskFivePM').text(localStorage.getItem("taskFivePM"));

// Displaying current date and time
function Timer() {
    var showTime = moment();
    $("#currentDay").text(showTime.format('MMM DD, YYYY [at] hh:mm:ss a'));
    // calling a function to use a css style for current time 
    compareTime();
  }
// updating time every second
  setInterval(Timer, 1000);

  function compareTime() {
        var presentTime = moment();
        // creating a variable which numeric value is present hour
        var presentHour = Number(presentTime.format('H'));
    // adding css style to 9 am input depending on present time 
        if(presentHour === 9){
            $('#taskNineAM').addClass("present"); 
        } if(presentHour < 9){
            $('#taskNineAM').addClass("future"); 
        }
        else if(presentHour > 9) {
            $('#taskNineAM').addClass("past"); 
           }
    // adding css style to 10 am input depending on current time 
         if(presentHour === 10){
            $('#taskTenAM').addClass("present"); 
        } if(presentHour < 10){
            $('#taskTenAM').addClass("future"); 
        }
        else if(presentHour > 10) {
            $('#taskTenAM').addClass("past"); 
           }
     // adding css style to 11 am input depending on current time 
           if(presentHour === 11){
            $('#taskElevenAM').addClass("present"); 
        } if(presentHour < 11){
            $('#taskElevenAM').addClass("future"); 
        }
        else if(presentHour > 11) {
            $('#taskElevenAM').addClass("past"); 
           }
           // adding css style to 12 pm input depending on current time 
        if(presentHour === 12){
            $('#taskNoon').addClass("present"); 
        } if(presentHour < 12){
            $('#taskNoon').addClass("future"); 
        }
        else if(presentHour > 12) {
            $('#taskNoon').addClass("past"); 
           }
           // adding css style to 1 pm input depending on current time 
        if(presentHour === 13){
            $('#taskOnePM').addClass("present"); 
        } if(presentHour < 13){
            $('#taskOnePM').addClass("future"); 
        }
        else if(presentHour > 13) {
            $('#taskOnePM').addClass("past"); 
           }
            // adding css style to 2 pm input depending on current time 
        if(presentHour === 14){
            $('#taskTwoPM').addClass("present"); 
        } if(presentHour < 14){
            $('#taskTwoPM').addClass("future"); 
        }
        else if(presentHour > 14) {
            $('#taskTwoPM').addClass("past"); 
           }
        // adding css style to 3 pm input depending on current time 
        if(presentHour === 15){
            $('#taskThreePM').addClass("present"); 
        } if(presentHour < 15){
            $('#taskThreePM').addClass("future"); 
        }
        else if(presentHour > 15) {
            $('#taskThreePM').addClass("past"); 
           }
           // adding css style to 4 pm input depending on current time 
        if(presentHour === 16){
            $('#taskFourPM').addClass("present"); 
        } if(presentHour < 16){
            $('#taskFourPM').addClass("future"); 
        }
        else if(presentHour > 16) {
            $('#taskFourPM').addClass("past"); 
           }
           // adding css style to 5 pm input depending on current time 
        if(presentHour === 17){
            $('#taskFivePM').addClass("present"); 
        } if(presentHour < 17){
            $('#taskFivePM').addClass("future"); 
        }
        else if(presentHour > 17) {
            $('#taskFivePM').addClass("past"); 
           }
        };



        
    

 