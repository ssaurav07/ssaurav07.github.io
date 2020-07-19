

$("#heading span").on("click",function(){
    $(".fa-plus").toggle();
    $("input").toggle();
    
})

$("input").keypress(function(event){
    if(event.which === 13){
            $("ul").append('<li><span><i class="fa fa-trash"></i></span>'+$(this).val()+'</li>');
            $("input").toggle();
            $(".fa-plus").toggle();
            $(this).val("");
            
        
        }
    });

$("li span").on("click",function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    
    event.stopPropagation();
    
}) 

$("li").on("click",function(){
    $(this).css({
        "text-decoration":"line-through",
        "text-decoration-color":"red"
    });
})