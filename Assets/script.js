var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function theTime() {

    $(".time-block").each(function () {
        var current = moment().hour();
        console.log(current);
        console.log($(this).attr("id").split("hour")[1]);
        var time = parseInt($(this).attr("id").split("hour")[1]); //
        console.log(time);
        if (current > time) {
            $(this).addClass("past");
        }
        else if (current === time) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
    console.log("Hello");
}

theTime();

$('.saveBtn').click(function(){
    var textArea = $(this).siblings(".description").val();
    var currentHour = $(this).parent().attr("id");
    localStorage.setItem(currentHour, textArea);
})

$("#nine").val(localStorage.getItem("hour9"));
$("#ten").val(localStorage.getItem("hour10"));
$("#eleven").val(localStorage.getItem("hour11"));
$("#twelve").val(localStorage.getItem("hour12"));
$("#thirteen").val(localStorage.getItem("hour13"));
$("#fourteen").val(localStorage.getItem("hour14"));
$("#fiveteen").val(localStorage.getItem("hour15"));
$("#sixteen").val(localStorage.getItem("hour16"));
$("#seventeen").val(localStorage.getItem("hour17"));

