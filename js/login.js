var alphabeticregx = /^[A-Za-z]+$/
var numregx = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
var emailregx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateLogin(){
	var a=document.getElementById('InputEmail').value;
	var b=document.getElementById('InputPassword').value;
	var emailerror="*Please enter a valid email id";
	var passworderror="*Please enter your password";
	if(a === '')
	{
		document.getElementById('emailvaliderror').innerHTML=emailerror;
		document.getElementById('passwordvaliderror').style.visibility= "hidden";
		document.getElementById('emailvaliderror').style.visibility= "visible";
	}
	else if(b===''){
		document.getElementById('passwordvaliderror').innerHTML=passworderror;
		document.getElementById('passwordvaliderror').style.visibility= "visible";
		document.getElementById('emailvaliderror').style.visibility= "hidden";
	}
	else if(a==='' && b==='')
	{
		document.getElementById('emailvaliderror').innerHTML=emailerror;
		document.getElementById('passwordvaliderror').innerHTML=passworderror;
		document.getElementById('passwordvaliderror').style.visibility= "visible";
		document.getElementById('emailvaliderror').style.visibility= "visible";
	}
	else{
		document.getElementById('passwordvaliderror').style.visibility= "hidden";
		document.getElementById('emailvaliderror').style.visibility= "hidden";
	}
}

function load_profile_edit(){
	document.getElementById('editbtn').onclick = window.location.href='profile-edit.html';
}

