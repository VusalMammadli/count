const spn = document.getElementById("spn")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
let i=0;


btn1.addEventListener("click",function(){
    i--;
    spn.innerText=i;
})
btn2.addEventListener("click", function(){
    i = 0
    spn.innerText=i;
    
})
btn3.addEventListener("click",function(){
    i++;
    spn.innerText=i;
})
