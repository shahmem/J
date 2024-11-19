let n=5
for(i=1;i<2*n;i++){
    a=''
    let col=i>n?2*n-i:i;
        let m=n-col;
    	for (let j = 0; j <= m; j++) {
    	a+=" "
	 	}
        for(k=1;k<col;k++){
            if(i==2*n-4 && k==2){
               a+="  " 
            }
            else{
                a+="* "
            }
        }
    console.log(a);
}