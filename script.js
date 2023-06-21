function highlight() {
	const c= document.body.children
	console.log(c)
	var strong = c[c.length-3].children
	 for(let i=0;i<strong.length;i++){
		strong[i].style.color="green"
	}
}

function return_normal() {
    const c= document.body.children
	var strong = c[c.length-3].children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="black"
	}
}
