var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function theTime() {


    $(".time-block").each(function () {
        var current = moment().hours();

        var time = parseInt($(this).attr("id").split("hours")[1]);

        if (current > time) {
            $(this).addClass("past");
        }
        else if (current === time) {
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

theTime();

