var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function theTime() {
    var hour = moment().hour();

    $(".time-block").each(function () {
        var time = parseInt($(this).attr("id"));

        if (hour > time) {
            $(this).addClass("past");
        }
        else if (hour === time) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
$(document).ready( function() {
    theTime();
});
