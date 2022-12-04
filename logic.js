//initializing
let n1Id=document.getElementById("num1");
let n2Id=document.getElementById("num2");
let sId=document.getElementById("sign");
let subId = document.getElementById("submit");
let inpId=document.getElementById("inp");
let answerId=document.getElementById("answer");

var score = 0;

let actualAnswer;//actual answer
let inputAnswer;

let h = ["+", "-", "*", "/"];


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
         actualAnswer = parseInt(n1Id.textContent) / parseInt(n2Id.textContent);
         inputAnswer = parseInt(inpId.value);
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