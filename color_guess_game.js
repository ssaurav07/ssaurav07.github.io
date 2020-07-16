var easy = document.getElementById("easy_span");
var hard = document.getElementById("hard_span");

easy.addEventListener("mouseover",function(){
    this.style.backgroundColor="blueviolet";
    this.style.color="white";   
});

hard.addEventListener("mouseover",function(){
    this.style.backgroundColor="blueviolet";
    this.style.color="white";   
});

easy.addEventListener("mouseout",function(){
    this.style.backgroundColor="white";
    this.style.color="blueviolet";   
});

hard.addEventListener("mouseout",function(){
    this.style.backgroundColor="white";
    this.style.color="blueviolet";   
});

function genRandomColor()
{
    var randomColor="RGB("+(Math.floor(Math.random()*266))+","+(Math.floor(Math.random()*266))+","+(Math.floor(Math.random()*266))+")";
    return randomColor;
}

var rgb_heading=document.querySelector(".heading");

var colum_length = document.querySelectorAll(".column").length;

var newColor=document.getElementById("new_color_span");

    newColor.addEventListener("click",function(){
        for(var i=0;i<(colum_length);i++){
                var colum=document.getElementsByClassName("column")[i];
                colum.style.backgroundColor=genRandomColor();
            
                var random_number=(Math.floor(Math.random()*7));
                if(i===Number(random_number))
                    {
                        rgb_heading.textContent=(colum.style.backgroundColor);
                    }
            };
        ;
        
        });








