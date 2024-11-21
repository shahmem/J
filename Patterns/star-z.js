let n=6;
for(i=1;i<=n;i++){
	let a=""
	for (let k = 0; k <= n - i; k++) {
		if( i==1 || k==n - i){
			a+="* "
		}
		else{
			a+="  "
		}
			 	}
	for(j=1;j<=n-1;j++){
		if(i==n ){
		a+="* "	
		}
		else{
		a+="  "
		}		
	}
	console.log(a)
}
