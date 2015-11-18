//
// intermezzo.js
//

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
