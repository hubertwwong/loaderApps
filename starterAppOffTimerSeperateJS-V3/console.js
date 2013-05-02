// a simple console file.
// assumes that there is a text box has an id='console'
// using a object literal. sorta like a class.
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