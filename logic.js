//initializing
let n1Id=document.getElementById("num1");
let n2Id=document.getElementById("num2");
let sId=document.getElementById("sign");
let nextId=document.getElementById("next");
let subId = document.getElementById("submit");
let inpId=document.getElementById("inp");
let answerId=document.getElementById("answer");

var score = 0;

let h = ["+", "-", "*", "/"];

nextId.addEventListener("click",function(){

    n1Id.textContent=Math.floor(Math.random()*50);
    n2Id.textContent=Math.floor(Math.random()*50);
    let operator = h[Math.floor(Math.random()*h.length)];
    sId.innerText = operator;
});

subId.addEventListener("click", function(){
    let actualAnswer = parseInt(n1Id.textContent + n2Id.textContent);
    let inputAnswer = parseInt(inpId.value);
    
    if(actualAnswer === inputAnswer){
        score++;
    }
    answerId.innerText = score;
    
});