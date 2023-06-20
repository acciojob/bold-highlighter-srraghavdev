function highlight() {
	const children= document.getElementsByTagName("body")[0].children
	console.log(children)
	let pt = children[4]
	let strong = pt.children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="green"
	}
}


function return_normal() {
    const children= document.getElementsByTagName("body")[0].children
	let pt = children[4]
	let strong = pt.children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="black"
	}

    
}
