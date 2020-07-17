var easy = document.getElementById("easy_span");
var hard = document.getElementById("hard_span");

/*
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
*/

easy.addEventListener("click",function(){
    this.style.backgroundColor="blueviolet";
    this.style.color="white";
    hard.style.backgroundColor="white";
    hard.style.color="blueviolet";
});

hard.addEventListener("click",function(){
    this.style.backgroundColor="blueviolet";
    this.style.color="white";
    easy.style.backgroundColor="white";
    easy.style.color="blueviolet";
});

function genRandomColor()
{
    var randomColor="RGB("+(Math.floor(Math.random()*266))+","+(Math.floor(Math.random()*266))+","+(Math.floor(Math.random()*266))+")";
    return randomColor;
}

var rgb_heading=document.querySelector(".heading");

var colum=document.querySelectorAll(".column");

var colum_length = document.querySelectorAll(".column").length;

var newColor=document.getElementById("new_color_span");

    newColor.addEventListener("click",color_change);
                              
function color_change(){
       
    document.getElementById("new_color_span").textContent="NEW COLORS";
    document.getElementById("tryAgain").textContent="";
    document.querySelector(".head_div").style.backgroundColor="blueviolet";
        var random_number=(Math.floor(Math.random()*6));
        
        for(var i=0;i<(colum_length);i++){
                colum[i].style.backgroundColor=genRandomColor();

                if(i===Number(random_number))
                    {
                        window.match_color=(colum[i].style.backgroundColor);
                        rgb_heading.textContent=match_color;
                    }
            }
        
        }

color_change();

for(var i=0;i<(colum_length);i++){
    
        colum[i].addEventListener("click",function(){
            
            var clicked_color=this.style.backgroundColor;
            
            if(clicked_color== match_color)
                {
                    alert("RIGHT ! RIGHT  ! RIGHT !");
                    
                    for(var i=0;i<(colum_length);i++){
                    colum[i].style.backgroundColor=match_color;
                    }
                    
                    document.querySelector(".head_div").style.backgroundColor=match_color;
                    
                    document.getElementById("tryAgain").textContent="Well Done!";
                    
                    document.getElementById("new_color_span").textContent="PLAY AGAIN?";
                    
                }
            
            else{
                alert("WRONG ! WRONG ! WRONG !");
                document.getElementById("tryAgain").textContent="Try Again!";
                this.style.backgroundColor="rgb(4,24,0)";
            }
        });
    }