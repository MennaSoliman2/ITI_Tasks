// task 1
// var arr = ["mona","ali","alaa","hoda","ahmed","Fathy"]
//  *  == return two random elements from the array ==> [mona,ali]
// function arrrandom(){
//     var arr = ["mona","ali","alaa","hoda","ahmed","Fathy"];
//     var arr2=[];
//     for(var i=0;i<2;i++){
//         var num = Math.floor(Math.random()*arr.length)
//         arr2.push(arr[num])
//     }
//     document.writeln("the random array is ", "[",arr2,"]" )
// }
// arrrandom()
// ///////////////////////////////////////////////////
// task 2
// take an string from the user , and a character
//  *    "this is javascript" , i
//  *
//  * return [2,5,15]
// function coutn_i_num(str,symbol) {
//     var str=prompt("Enter the string :");
//     var symbol=prompt("Enter the character :");
//     var arr=[]
//     for(var i=0;i<str.length;i++){
//         if(str[i]==symbol){
//             arr.push(i)
//         }else continue
//     }
//     return  arr;
// }
// document.writeln("[",coutn_i_num(),"]")
// //////////////////////////////////////////////////
// task 3- take 5 element from the user and push them into an array (10,3,6,9,12)
//  *
// *  1- sort ascend 3,6,9,10,12
// *  2- sort descend 12,10,9,6,3
// *  3- sum      -- X
// function sortAndSumArray() {
//     var arr = [];
//     var sum=0;
//     for (var i = 0; i < 5; i++) {
//       var item = parseInt(prompt(`Enter element ${i + 1}:`));
//       arr.push(item);
//       sum+=item
//     } 
//     var ascArr =arr.sort()
//     document.writeln("sort ascend:", ascArr,"<br>");
//     var descArr = ascArr.reverse();
//     document.writeln("sort descend:", descArr,"<br>");
//     document.writeln("sum:", sum);
//   }
//   sortAndSumArray();


// //////////////////////////////////////////////////////////

// *4- take string from the user , count (e) in the string
//   -- ahmed --> 1
//   -- sara --> 0
//   -- Aliieee --> 3
function counte() {
    var str = prompt("Enter a string:");
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "e") {
        count++;
      }
    }
    
    document.writeln(str," : ",count);
  }


  counte();


