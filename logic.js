//initializing
let n1Id=document.getElementById("num1");
let n2Id=document.getElementById("num2");
let sId=document.getElementById("sign");
let subId = document.getElementById("submit");
let inpId=document.getElementById("inp");
let answerId=document.getElementById("answer");
let timerId = document.getElementById("timer");
const myBody = document.body.innerHTML

let time = parseInt(timerId.innerText);

setInterval(timerChange, 1000);
function timerChange(){
     if(time === 0){
          //window.location='score.html';
          document.body.innerHTML = `Your final score is ${score}`;
     }
     time--;
     timerId.innerText = time;
}

var score = 0;

let actualAnswer;//actual answer
let inputAnswer;

let h = ["+", "-", "*", "/"];

function countdown(){
     timerId
}
subId.addEventListener("click", function(){
    if(sId.innerText===h[0]){
         actualAnswer = parseInt(n1Id.textContent) + parseInt(n2Id.textContent);
         inputAnswer = parseInt(inpId.value);
    }
    else  if(sId.innerText===h[1])
    {
         actualAnswer = parseInt(n1Id.textContent) - parseInt(n2Id.textContent);
         inputAnswer = parseInt(inpId.value);
    }
    else  if(sId.innerText===h[2])
    {
         actualAnswer = parseInt(n1Id.textContent) * parseInt(n2Id.textContent);
         inputAnswer = parseInt(inpId.value);
    }
    else if(sId.innerText===h[3])
    {
         actualAnswer = Math.floor(parseInt(n1Id.textContent) / parseInt(n2Id.textContent));
         inputAnswer = Math.floor(parseInt(inpId.value));
    }
    console.log(actualAnswer);
    console.log(inputAnswer);
    if(actualAnswer === inputAnswer){
        score++;
    }
    answerId.innerText = score;
    n1Id.textContent=Math.floor(Math.random()*50);
    n2Id.textContent=Math.floor(Math.random()*50);
    let operator = h[Math.floor(Math.random()*h.length)];
    sId.innerText = operator;
    
});