var inputName=document.querySelector(".contact input[type='text']")
// console.log(inputName);
var inputAge=document.querySelector(".contact input[type='number']")
// console.log(inputAge);
var nameAlert=document.getElementById("namevalid")
var ageAlert=document.getElementById("agevalid")
var pvalid=document.getElementById("isvalid")
// console.log(nameAlert,ageAlert);
function checkValid(){
    var check=false
    if(inputName.value==""||inputName.value.length < 3){
        nameAlert.classList.remove('alret')
    }else if(inputName.value.length > 3){
        nameAlert.classList.add('alret')
        check=true
    }
    if(inputAge.value==""||Number(inputAge.value) < 18){
        ageAlert.classList.remove('alret')
        check=false
    }else if(Number(inputAge.value) > 18){
        ageAlert.classList.add('alret')
    }
    if (check){
        pvalid.innerHTML=`Username: ${inputName.value}<br> age :  ${inputAge.value}`

    }
}


