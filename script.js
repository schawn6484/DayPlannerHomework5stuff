$(document).ready(function(){
//Current Time and Date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().hour();


//Save Button with local storage    
    $('.saveBtn').click(function(){
        console.log('button clicked')
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value);
    });

//Text area, Description with local storage  
    $('textarea').each(function(){
        var time = $(this).parent().attr('id');
        var scheduleTime =  localStorage.getItem(time);
        $(this).val(scheduleTime);

    });

//Color change    
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


});