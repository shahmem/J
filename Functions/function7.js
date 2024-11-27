//Write a function to check if an input string is a palindrome?
//-------------------------------------------------------------
function palindrome(num) {
    let strnum=num.toString()
    let revnumber= strnum.split("").reverse().join("");
    if (num == revnumber){ 
        return  num+" is palindrome number"
    }
    else{
        return num+" is not a palindrome number"
    }

}
let result = palindrome(108);
console.log(result);

