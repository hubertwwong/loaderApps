// wrapper to wait 1 second before this script loads.
// a pretty idiot proof way to wait for the DOM to load.
// not the best.
setTimeout(function(){
	// console.
	var con = document.getElementById('console');
 	con.value = "replaced text from javascript";
}, 1000);