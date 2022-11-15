let n1Id=document.getElementById("num1");
let n2Id=document.getElementById("num2");
let sId=document.getElementById("sign");
let subId=document.getElementById("sub");
let inpId=document.getElementById("inp");
let rId=document.getElementById("r");
const val = parseInt(document.querySelector('input').value);
var n1 = parseInt(n1Id);
var n2 = parseInt(n2Id);
var n3 = parseInt(val);
var n4 = n1 + n2;
subId.addEventListener("click",function(){
n1Id.textContent=Math.floor(Math.random()*100);
n2Id.textContent=Math.floor(Math.random()*100);
let h = ["+", "-", "*","/"];
let rndWord = h[Math.floor(Math.random()*h.length)];
sId.innerHTML = rndWord;
let right=0;
let wrong=0;
if(rndWord===h[0])
{
      rId.innerText="addition";
}
if(rndWord===h[1])
{
    rId.innerText="subtraction";
}
if(rndWord===h[2])
{
    rId.innerText="multiplication";
}
if(rndWord===h[3])
{
    rId.innerText="division";
}
});
