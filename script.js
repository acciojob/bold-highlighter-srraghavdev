function highlight() {
	const c= document.getElementsByTagName("body")[0].children
	let pt = c[4]
	let strong = pt.children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="green"
	}
}


function return_normal() {
    const c= document.getElementsByTagName("body")[0].children
	let pt = c[4]
	let strong = pt.children
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="black"
	}

    
}
