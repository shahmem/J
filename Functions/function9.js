//fibonacci series
//----------------
function fibonacci(number) {
    x = 0
    y = 1
    if(number==0){
        console.log(0)
    }
    else if(number==1){
        console.log(1)
    }
    else{ 
    for (i = 0; i < number; i++) {
        console.log(x)
        z = x + y
        x = y
        y = z
    }
    }
}
result = fibonacci(5);
return result;

