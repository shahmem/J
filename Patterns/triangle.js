let rows =5;
for (let i = 0; i <= rows ; i++) {
    let a =""
	for (let j = 0; j <= rows - i; j++) {
        a+="  "
	}
    for (let j =2 * i - 1; j > 0; j--) {
        a+="* "
	}
	console.log(a);
}