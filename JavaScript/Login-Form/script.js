var attempt = 3; 
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "Harshita" && password == "Harsh@123"){
		alert ("Success!");
		window.location = "output.html"; 
		return false;
	}
	else{
		attempt --;
		alert("You have "+attempt+" attempt/s left!");
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}
