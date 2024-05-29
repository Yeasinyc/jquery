$(function(){
 let qsns = $('.qsn') 

qsns.on('click', function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{ qsns.removeClass('active');
    $(this).addClass('active');
        
    }
});

});