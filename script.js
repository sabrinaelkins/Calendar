$(document).ready(function () {

    var currentDate = moment().format("MMM Do YY");
    $("#currentDay").text(currentDate)
    $(".saveplan").on("click", function () {
        var timeBlock = $(this).attr("id").split("-")[0]
        var userSchedule = $("#" + timeBlock + "-plan").val()
        console.log(timeBlock, userSchedule)
        localStorage.setItem(timeBlock, userSchedule)
    })
    var currentHour = moment().hour()
    for (let i = 9; i < 19; i++) {
        var userSchedule = localStorage.getItem(i)
        $("#" + i + "-plan").val(userSchedule)
        if(i> currentHour){
            $("#" + i + "-plan").addClass("future")
        }
        else if(i=== currentHour){
            $("#" + i + "-plan").addClass("present")
        }
        else {
            $("#" + i + "-plan").addClass("past")
        }
    }
})