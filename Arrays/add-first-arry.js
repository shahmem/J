// add an element into begining of array
//----------------------------------
const myarray=["apple","orange","grape"];
var new_element ="kiwi";
for(let i = myarray.length ; i >0 ; i--){
myarray[i]=myarray[i-1]
  
 }
 myarray[0]=new_element
  console.log(myarray);
