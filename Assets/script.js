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



/*


$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));



$("#hour9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#hour10").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#hour11").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#hour12").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#hour13").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#hour14").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#hour15").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#hour16").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#hour17").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
*/