let countDown = 30;
let globalRandom=0;
let score=0;
let highestScore=0;
generateRandom();
function check(){
    let num = document.querySelector('#num').value;
    console.log(num);
    console.log("Generate a random no 1-30 : "+globalRandom);
    
    if(num==globalRandom){
        
        score = countDown;
        if(score<highestScore)
        document.getElementById('status').innerHTML="You guess it right and the score is: "+score;
        else
        document.getElementById('status').innerHTML="Congratulations new High score :"+score;
        
        if(highestScore<score)
            highestScore=score;
        document.getElementById('hsc').innerHTML=highestScore;
       // reset();
       document.getElementById('check').style.visibility='hidden';
       document.getElementById('reset').innerHTML="Play again!!";
       document.querySelector('body').style.backgroundColor="lightgreen";
       document.getElementById('hide').innerHTML=globalRandom;
    }
    else if(num>globalRandom){
        document.getElementById('status').innerHTML="Too High...";
        countDown--;
    }
        
    else {
        document.getElementById('status').innerHTML="Too Low..."
    countDown--;
    }
    document.getElementById('csc').innerHTML=countDown;
    
}
function generateRandom(){
    globalRandom = Math.floor((Math.random()*30)+1);    
    
}
function reset(){
    generateRandom();
    countDown=30;
    console.log("Let's play it again...");
    document.getElementById('check').style.visibility='visible';
    document.getElementById('reset').innerHTML="Reset";
    document.getElementById('csc').innerHTML=30;
    document.getElementById('status').innerHTML="";
    document.getElementById('hide').innerHTML="?";
    document.querySelector('body').style.backgroundColor="silver";

}
