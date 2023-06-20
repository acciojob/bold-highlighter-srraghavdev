function highlight() {
	const children= document.getElementsByTagName("BODY")[0].children
	let pt = children[4]
	console.log(pt)
	let strong = pt.children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="green"
	}
}


function return_normal() {
    const children= document.getElementsByTagName("BODY")[0].children
	let pt = children[4]
	console.log(pt)
	let strong = pt.children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="black"
	}

    
}
