$(document).ready(function(){

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().hour();

    var savedPlan = JSON.parse(localStorage.getItem("savedPlan"));

    if(savedPlan !== null){
        planTextArray =savedPlan
    }

    for( var hour = 9; hour <= 17; hour++)


    $('.time-block').each(function(){
    var id = parseInt($(this).attr('id'));
    if(id < currentHour){
        $(this).addClass('past');
    } else if (id === currentHour){
        $(this).removeClass('past'); 
        $(this).addClass('present');  
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
    }
    
    )


localStorage.setItem("savedPlan", JSON.stringify(planTextArray)); 

});