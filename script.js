function highlight() {
	const c= document.body.children
	var strong = c[4].children
	strong.value='strong'
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="green"
	}
}

function return_normal() {
    const c= document.body.children
	var strong = c[4].children
	strong.value='strong'
	for(let i=0;i<strong.length;i++){
		strong[i].style.color="black"
	}   
}
