$(".fa-trash").on("click",function(event){
    $(this).parent().parent().fadeOut(function(){
        $(this).remove();
    });
    
    event.stopPropagation();
    
}) 