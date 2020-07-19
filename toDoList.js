$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    
    event.stopPropagation();
    
}) 

$("ul").on("click","li",function(){
    $(this).css({
        "text-decoration":"line-through",
        "text-decoration-color":"red"
    });
})

$("#heading span").on("click",function(){
    $(".fa-plus").toggle();
    $("input").toggle();
    
})

$("input").on("keypress",function(event){
    if(event.which === 13){
            var newtodo= $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+newtodo+"</li>");
            $("input").toggle();
            $(".fa-plus").toggle();
            
        }
    });