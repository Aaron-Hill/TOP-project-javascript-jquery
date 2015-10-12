$(document).ready(function () {
var boxes = 16;
//Evaluating Box Size within a function.
var etch = function(x) {    
    for (var i = 0; i <= (x * x - 1); i++) {
        $(".container").append("<div class='cell' style='width:" + (90/x) + "%;height:" + (90/x) + "%;margin:" + (5/x) + "%;float:left;'></div>");
    }
    $(".cell").hover(function () {
        $(this).css("background-color","black");
});
}

//Color Randomizer - click for fabulous.
$(".rainbow").click(function() {
        $(".cell").hover(function () {
        var colo = function() {
          return Math.floor(Math.random() * 255);  
        };
            $(this).css("background-color", "rgb(" + colo() + "," + colo() + "," + colo() + ")");
        });
});

etch(boxes);
    
    
//We know you have a choice in boxes, we're glad you chose ours.
    $(".clearOut").click(function() {
        $(".cell").css("background-color", "grey");
        var userBoxes = prompt("How many boxes should it hold?");
        $(".container").empty();
        etch(userBoxes);
        console.log(userBoxes);
    });
});

//You're doing great, don't get frustrated. You can do it.