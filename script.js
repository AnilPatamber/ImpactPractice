let countDown = 30;
let globalRandom=0;
let score=0;
let highestScore=0;
const wrong= new Audio("./sound/wrong.wav");
const right= new Audio("./sound/right.wav");
generateRandom();
function check(){
    let num = document.querySelector('#num').value;
    console.log(num);
    console.log("Generate a random no 1-30 : "+globalRandom);
    
    if(num==globalRandom){
        
        score = countDown;
        right.play();
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
        document.querySelector('body').style.backgroundColor="red";
        document.getElementById('status').innerHTML="Too High...";
        wrong.play();
        countDown--;
        setTimeout(() => { document.querySelector('body').style.backgroundColor="silver"; }, 100);
    }
        
    else {
        document.querySelector('body').style.backgroundColor="red";        
        document.getElementById('status').innerHTML="Too Low..."; 
        wrong.play();       
        countDown--; 
        setTimeout(() => { document.querySelector('body').style.backgroundColor="silver"; }, 100)       
        
        
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
