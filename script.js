function highlight() {
	const c= document.body.children
	var strong = c[4].children
	 for(let i=0;i<strong.length;i++){
		strong[i].style.color="green"
	}
	return 
}

function return_normal() {
    const c= document.body.children
	var strong = c[4].children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="black"
	}
	return 
}
