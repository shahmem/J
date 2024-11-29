//Write a function to check if a number is Prime
//----------------------------------------------
function PrimeNum(num) {
   if (num ==1 || num>2 && num%2==0  || num>3 && num%3==0 ||num>5 && num%5==0){
    return num+" is not a prime number"
   }
   else {
    return num+" is a prime number"
   }
}
let result=PrimeNum(39);
console.log(result);

