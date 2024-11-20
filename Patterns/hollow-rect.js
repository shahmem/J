let n=5;
for(i=1;i<=n;i++){
	let a=''
	for(j=1;j<=n;j++){
		if(i==1 ||i==n || j==1 ||j==n){
		a+='*'	
		}
		else{
		a+=" "
		}		
	}
	console.log(a);
}
