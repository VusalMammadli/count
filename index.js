const spn = document.getElementById("spn")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
let i=0;
let a=0;


btn1.addEventListener("click",function(){
    spn.innerText=i--;
})
btn2.addEventListener("click", function(){
    spn.innerText=0;
    
})
btn3.addEventListener("click",function(){
    spn.innerText=a++;
})