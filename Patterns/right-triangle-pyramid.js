let n=3;
for (let i = 1; i <= n; i++) {
    let a="";
    // let b=(i>=3)?i:n-i;
	for (let j = 1; j <= i-n; j++) {
        a+=" * "
	}
	for (let k = n-i; k >= 1; k--) {
        a+=" # "
	}
	console.log(a);
}
