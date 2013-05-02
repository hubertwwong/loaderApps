(function() {
	// bake in some console that you can output stuff too.
	// assumes that a text box has an id='console'
	// using a module pattern.
 	var con = function () {
 		var console = document.getElementById('console');
 		console.value = "";
 		
 		return {
 			print: function(textOutput) {
 				console.value += textOutput;
 			},
 			println: function(textOutput) {
 				console.value += textOutput + "\n";
 			}
 		};
 	}();
 	
 	// main code
 	// ===============================================================================
 	
 	// stuff.
 	con.println("hello");
 	con.print("hello");
 	
})();