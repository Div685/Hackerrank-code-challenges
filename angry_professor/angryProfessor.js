function angryProfessor(k, a){
	let count = 0;

	for(let i = 0; i < a.length; i++){
		if(a[i] <= 0) {
			count = count +1;
		}
	}
	if(count < k){
		//console.log("YES");
		return "YES";
	} else {
		//console.log("NO");
		return "NO";
	}
}

//angryProfessor(3, [-1,-3, 4, 2])