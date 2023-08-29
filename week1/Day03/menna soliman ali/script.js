//              [Sum,-,*,/] the two number and show result

// var num1=Number(prompt("Enter the first number: "));
// var num2=Number(prompt("Enter the second number: "));

// document.writeln(`<ul>Results : 
// <li>${num1} + ${num2} = ${num1+num2}</li>
// <li>${num1} - ${num2} = ${num1-num2}</li>
// <li>${num1} * ${num2} = ${num1*num2}</li>
// <li>${num1} / ${num2} = ${num1/num2}</li>
// `)

// ////////////////////////////////////////////////////////
//              check num is  positive or negative and check num is odd , even
// var num =prompt("Enter a number please: ");
// if (num==0)
//     {
//         document.writeln("eqial to zero");
//     }
// else if(num < 0){    
//     document.writeln("<p>negative</p> ");
// } else {
//     document.writeln("<p>positive</p> ");
// }
// if(num%2==0)
// {
//     document.writeln("<p>even</p>");
// }
// else{
//     document.writeln("<p>odd</p>");
// }
// ///////////////////////////////////////////////////////
//              3- FizzBuzzProblem ==  % 3--> Fizz== %5 --> Buzz ==%3,5 --> fizzBuzz--> None
// var num=Number(prompt("Enter the number: "));
// if(num%3==0&&num%5==0){
//     document.writeln("fizzBuzz")
// }else if(num%5==0){
//     document.writeln("Buzz")
// }else if(num%3==0){
//     document.writeln("Fizz")
// }
// else{
//     document.writeln("None")
// }
// /////////////////////////////////////////////////////////
//               4- take num from user

var num=Number(prompt('Enter a number from 1 to 6: '));
for(var i=1;i<=num;i++){
    document.writeln("<h"+i+">Menna</h"+i+">")
}






