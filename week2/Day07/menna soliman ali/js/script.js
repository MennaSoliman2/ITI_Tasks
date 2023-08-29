var inputName=document.querySelector(".contact input[type='text']")
// console.log(inputName);
var inputAge=document.querySelector(".contact input[type='number']")
// console.log(inputAge);
var nameAlert=document.getElementById("namevalid")
var ageAlert=document.getElementById("agevalid")
var pvalid=document.getElementById("isvalid")

// console.log(nameAlert,ageAlert);
var checkname=false,checkage=false,checkselect=false ,check=false;
inputName.addEventListener("input",function(e){
    if(e.target.value.length < 4 || !isNaN(Number(e.target.value[0]))||e.target.value==""){
        inputName.style.border="2px solid red"
        nameAlert.style.display="block"
        checkname=false
    }else{
        inputName.style.border="2px solid green"
        nameAlert.style.display="none"
        checkname=true
    }
})
inputAge.addEventListener("input",function(e){
    if(e.target.value < 18 ||e.target.value=="" ){
        inputAge.style.border="2px solid red"
        ageAlert.style.display="block"
        checkage=false
    }else{
        inputAge.style.border="2px solid green"
        ageAlert.style.display="none"
        checkage=true
    }
})


var select=document.getElementById("select")
var selectalert=document.getElementById("selectalert")
select.addEventListener('change',function(){
    if(select.value===""){
        select.style.border="2px solid red"
        selectalert.style.display='block'
    }else{
        select.style.border="2px solid green"
        selectalert.style.display='none'
    }
})


var reset=document.getElementById("reset")

reset.addEventListener('click',function(){
    location.reload();
    // inputName.value = "";
    // inputAge.value = "";
    // nameAlert.style.display = 'none';
    // ageAlert.style.display = 'none';
    // pvalid.style.display = 'none';
    // select.value=select.value[1]
    // sportCheckboxes.forEach(function (checkbox) {
    //     checkbox.checked = false;
    // }
    // )
})

var registerbtn=document.getElementById("registerbtn")
var checkarlet=document.getElementById("checkarlet")
registerbtn.addEventListener('click',function(){
        var chboxes = document.getElementsByName("checkbox");
        counter = 0;
        for (var i = 0; i < chboxes.length; i++) {
            if (chboxes[i].checked == true) {
                counter++;
            }
        }
        if (counter < 2) {
            checkarlet.style.display = "block";
        }
        else {  
            checkarlet.style.display = "none";
            pvalid.style.display="block"
        }      
        
        if ( checkage && checkname ) {
            pvalid.innerHTML="Valid Data";
          } else {
            pvalid.style.display = "none";
          }
})











