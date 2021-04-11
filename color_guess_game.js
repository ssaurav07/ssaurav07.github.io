

var easy = document.getElementById("easy_span");
var hard = document.getElementById("hard_span");

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

function playAudio(check)
{
    var audio=new Audio();
    
    if(check=="no")
        {
            audio.src="wrong.mp3";
        }
    else{
        audio.src="right.mp3";
    }
    
    audio.play();
}

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
       
    newColor.textContent="NEW COLORS";
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
                    playAudio("yes");
                    setTimeout(function(){alert("RIGHT ! RIGHT  ! RIGHT !");},500);
                    
                    for(var i=0;i<(colum_length);i++){
                    colum[i].style.backgroundColor=match_color;
                    }
                    
                    document.querySelector(".head_div").style.backgroundColor=match_color;
                    
                    document.getElementById("tryAgain").textContent="Well Done!";
                    
                    newColor.textContent="PLAY AGAIN?";
                    
                }
            
            else{
                playAudio("no");
                setTimeout(function(){alert("WRONG ! WRONG ! WRONG !");},500);
                document.getElementById("tryAgain").textContent="Try Again!";
                this.style.backgroundColor="rgb(4,24,0)";
            }
        });
    }