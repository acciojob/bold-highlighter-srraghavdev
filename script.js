function highlight() {
	const c= document.body.children
	console.log(c)
	let strong = c[4].children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="green"
	}
}

function return_normal() {
    const c= document.body.children
	let strong = c[4].children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="black"
	}   
}
