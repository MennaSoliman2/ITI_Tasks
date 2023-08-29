var i=0
function addStudent(){
    var name=document.querySelector(".contact input[type='text']").value
    var age=document.querySelector(".contact input[type='number']").value
    var tbody=document.getElementById("tableRow")
    var row =tbody.insertRow(i)
    var idcell= row.insertCell(0)
    var namecell= row.insertCell(1)
    var agecell= row.insertCell(2)
    idcell.innerHTML =i
    namecell.innerHTML=name
    agecell.innerHTML=age
    i++
}
