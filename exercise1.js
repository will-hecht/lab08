function validatePassword() {
	var userPassword1 = document.getElementById("password1").value;
	var userPassword2 = document.getElementById("password2").value;
	if(userPassword1!=userPassword2) {
		alert("Error: Passwords are not the same");
	}
	else if(userPassword1.length<8) {
		alert("Error: Password is not at least 8 characters long");
	}
	else {
		alert("Valid Password");
	}
}

function test() {
	console.log("JavaScript Loaded");
}
