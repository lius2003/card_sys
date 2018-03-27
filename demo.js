function(id){
	alert("hello");
	var obj = document.getElementById(id);
	obj.onmousedown = function(){
			alert("hello world");
			alert("good things");
		}
	}