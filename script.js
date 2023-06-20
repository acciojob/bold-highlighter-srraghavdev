function highlight() {
	const c= document.body.children
	console.log(c)
	let pt = c[4]
	let strong = pt.children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="green"
	}
}

function return_normal() {
    const c= document.body.children
	let pt = c[4]
	let strong = pt.children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="black"
	}   
}
