// add an element into centre of array
//----------------------------------
const myarray=["aa","bb","cc","dd"];
var new_element ="kiwi";
let k=(myarray.length)/2;
for(let i = myarray.length ; i >k ; i--){
myarray[i]=myarray[i-1]
  
 }
 myarray[k]=new_element
  console.log(myarray);
