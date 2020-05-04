var btn=document.querySelector(".guessbtn");
var rbtn=document.querySelector(".restart");
let gn=Math.ceil(Math.random()*100);
var c=10;
var s=0;
document.getElementById("chance").innerHTML="Chances left: " +c;
document.getElementById("score").innerHTML="Score: " +s+"" ;

function dScore(ch,sc)
{
    document.getElementById("chance").innerHTML="Chances left: " +c;
    document.getElementById("score").innerHTML="Score: " +s+"" ;
    if(ch<=0)
        {
            document.getElementById("s1").innerHTML= "Game Over!! You have lost all chances";
        }
}

btn.onclick=function (){
    var n=parseInt(document.getElementById("guessnum").value);
    if(isNaN(n)||n<=0 || n>100)
        {
            document.getElementById("s1").innerHTML="Invalid number......";
        }
    else
    {
        if(c>0)
        {
            c--;
            for(i=0;i<10;i++)
                {
                    if(n==gn)
                    {
                        document.getElementById("s1").innerHTML= "Congratulations!!!You have guessed the correct number and you got your chances back";
                        s=parseInt(s+5);
                        c=10;
                        dScore(c,s);
                        setTimeout(random, 3000);
                    }
                    else if (n<gn)
                    {
                        document.getElementById("s1").innerHTML= "Guessed number is too low!!";
                        dScore(c,s);
                    }
                    else
                    {
                        document.getElementById("s1").innerHTML= "Guessed number is too high!!";
                        dScore(c,s);
                    }
                }
        }
    }
}

rbtn.onclick=function(){
    location.reload();
}

function random()
{
    gn=Math.ceil(Math.random()*100);
}