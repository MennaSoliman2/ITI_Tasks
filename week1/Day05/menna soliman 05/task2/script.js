var h= document.getElementById("header");
// console.log(h);
var p=document.querySelector(".container p")
// console.log(p);

function changetext(){
    p.innerText=h.innerHTML
}

function doublechangetext(){
    p.innerHTML=`<h2>${h.innerHTML}</h2>`
}

function changestyle(){
    p.style.background="rgb(20, 145, 103)"
    p.style.color="white"

}
function changecontent(){
    h.textContent="Thank You"
}