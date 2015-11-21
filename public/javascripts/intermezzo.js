//
// intermezzo.js
//

// register
function register() {

  $.ajax({
		type: "POST",
		url: USERS,
		data: {
			email: document.getElementById("email").value,
			password: document.getElementById("password").value
		},
		success: function( data, textStatus, xhr ) {
			window.location = HOME;
		},
		error: function( xhr, textStatus, msg ) {
			console.log("PROVIDE A REAL ERROR MESSAGE");
		},
		datatype: "json"
	});
  
} // register


// login
function login() {

  $.ajax({
		type: "POST",
		url: AUTH,
		data: {
			email: document.getElementById("email").value,
			password: document.getElementById("password").value
		},
		success: function( data, textStatus, xhr ) {
			window.location = HOME;
		},
		error: function( xhr, textStatus, msg ) {
			alert("Invalid credentials.");
		},
		datatype: "json"
	});
  
} // login


// logout
function logout() {

  
  $.ajax({
		type: "DELETE",
		url: AUTH,
		success: function( data, textStatus, xhr ) {
			window.location = WWW;
		},
		error: function( xhr, textStatus, msg ) {
			console.log("PROVIDE A REAL ERROR MESSAGE");
		},
		datatype: "json"
	});
  
} // logout
