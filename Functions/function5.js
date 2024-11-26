//Write a function to find Factorial of a number?
//--------------------------------------------
function factorial(n) {
	for(i=n-1;i>0;i--){
		n*=i
	}
	return n
}
let result=factorial(100);
console.log(result);
