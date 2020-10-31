$(document).ready(function(){

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    var currentHour = moment().hour();

    $('time-block').each(function(){
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
   localStorage.setItem(" " ,  JSON.stringify());








});