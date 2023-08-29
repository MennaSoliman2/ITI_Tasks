
var img= document.getElementById("img")
var arr=["img/1.jpg","img/2.jpg","img/3.jpg"]
var i=0
function slider(){
    i++
    if(i>arr.length-1){
        i=0
    }
    img.setAttribute("src",arr[i])
}
  

// ////////

var count=document.getElementById("count")
var i = 3;
function showLink(){
    var myInterval = setInterval(function () {
        count.innerHTML= i-- +" seconds"
        if (i==-1){
            clearInterval(myInterval);
            count.innerHTML=`<a href="https://www.google.com" target="_blank">Google</a>`
        }
    }, 1000);
    if (i==0){
        clearInterval(myInterval);
    }
}
