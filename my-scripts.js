// create count in the database
if (localStorage.getItem("count") == null) {
localStorage.setItem("count",0)
}

// update the html to reflect database
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}
update()

// add one to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
update()
}

// reset count
function reset(){
	if (confirm("Are you sure you want to reset?")){
		localStorage.setItem("count",0)
		update()
	}	
}