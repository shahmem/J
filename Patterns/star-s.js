let n=3;
for(i=1;i<=n;i++){
	let a=""
	for(j=1;j<=n;j++){
		if(i==1 || j==1 ||i==n ){
		a+="*  "	
		}
		else{
		a+="  "
		}		
	}
	console.log(a)
}
let m=n-1;
for(l=1;l<=m;l++){
	let b=""
	for(k=1;k<=n;k++){
		if(k==n ||l==m){
		b+="*  "	
		}
		else{
		b+="   "
		}
	}
	console.log(b);
}
