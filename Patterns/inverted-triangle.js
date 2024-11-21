let row =4;
for (let i = row; i >= 0; i--) {
    let a =""	
	for (let j = 0; j <= row - i; j++) {
        a+=" "
	}
    for (let j = i; j >= 0; j--) {
        a+="* "
	}
	console.log(a);
} 