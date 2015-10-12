$(document).ready(function () {
    //Add an alert that get's triggered when the button gets pushed, ask user for number of boxes, store in variable
    
    for (var i = 0; i <= 255; i++) {
        //Move info that doesn't get edited to css page under class "cell".
        //Divide percentage by user input. Alot 96 percent for cell, 4 percent for margin.
        //So 96/userInput concatonated into width and height. Then 4/userInput concatonated into margin.
        $(".container").append("<div class='cell' style='display:inline-block;background-color:grey;width:5.75%;height:5.75%;margin:.25%;float:left;'></div>");
    }
        //This is where you put the color randomizer, figure that out later.
    $(".cell").hover(function () {
        $(this).css("background-color","black");
    });
});

//You're doing great, don't get frustrated. You can do it.