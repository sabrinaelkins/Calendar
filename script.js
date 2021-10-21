$(document).ready(function () {

var currentDate = moment().format("MMM Do YY");  
$("#currentDay").text(currentDate)
$(".saveplan").on("click",function(){
var timeBlock = $(this).attr("id").split("-")[0]
var userSchedule = $("#" + timeBlock + "-plan").val()
console.log(timeBlock, userSchedule)
localStorage.setItem(timeBlock, userSchedule)
})
})