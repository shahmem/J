let n=5
for(i=1;i<=n;i++){
	a=""
	for (let j = 0; j <= n - i; j++) {
    	a+=" "
	 	}
	for(k=1;k<=i;k++){
		if(k==1 ||k==i ||i==n){
			a+="* "
		}
		else{
			a+="  "
		}
	}
	console.log(a);	
}