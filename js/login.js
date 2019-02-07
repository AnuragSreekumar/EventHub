var alphabeticregx = new RegExp(/^[A-Za-z ]+$/);
var numregx = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
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

function validateForm(){
	var fname=document.getElementById('firstname').value;
	var lname=document.getElementById('lastname').value;
	var gender=document.getElementById('gender').value;
	var emailid=document.getElementById('email').value;
	var phone=document.getElementById('phone').value;
	var univ=document.getElementById('university').value;
	var branch=document.getElementById('branch').value;	

	var emailerror="Please enter a valid email id";
	var errorfirstname="Enter a valid first name"
	var errorlastname="Enter a valid last name";
	var errorgender="Invalid input";
	var errorphone="Enter a valid Phone number";
	var erroruniv="Invalid input";
	var errorbranch="Invalid input";

	if(fname === '' || !alphabeticregx.test(fname)){
		document.getElementById('errorfname').innerHTML=errorfirstname;
		document.getElementById('errorfname').style.visibility= "visible";
	}
	else{
		document.getElementById('errorfname').innerHTML='';
		document.getElementById('errorfname').style.visibility= "hidden";
	}

    if(lname === '' || !alphabeticregx.test(lname)){
		document.getElementById('errorlname').innerHTML=errorlastname;
		document.getElementById('errorlname').style.visibility= "visible";
	}
	else{
		document.getElementById('errorlname').innerHTML='';
		document.getElementById('errorlname').style.visibility= "hidden";
	}
	if(emailid === ''){
		document.getElementById('erroremail').innerHTML=emailerror;
		document.getElementById('erroremail').style.visibility= "visible";
	}
	else{
		document.getElementById('erroremail').innerHTML='';
		document.getElementById('erroremail').style.visibility= "hidden";
	}
	if(phone === '' || !numregx.test(phone)){
		document.getElementById('errornumber').innerHTML=errorphone;
		document.getElementById('errornumber').style.visibility= "visible";	
	}
	else{
		document.getElementById('errornumber').innerHTML='';
		document.getElementById('errornumber').style.visibility= "hidden";	
	}
	if(univ === '' || !alphabeticregx.test(univ)){
		document.getElementById('erroruniv').innerHTML=erroruniv;
		document.getElementById('erroruniv').style.visibility= "visible";
	}
	else{
		document.getElementById('erroruniv').innerHTML='';
		document.getElementById('erroruniv').style.visibility= "hidden";
	}
	if(branch === '' || !alphabeticregx.test(branch)){
		document.getElementById('errorbranch').innerHTML=errorbranch;
		document.getElementById('errorbranch').style.visibility= "visible";
	}
	else{
		document.getElementById('errorbranch').innerHTML='';
		document.getElementById('errorbranch').style.visibility= "hidden";
	}
	if(gender === '-1'){
		document.getElementById('errorgender').innerHTML=errorgender;
		document.getElementById('errorgender').style.visibility= "visible";	
	}
	else{
		document.getElementById('errorgender').innerHTML='';
		document.getElementById('errorgender').style.visibility= "hidden";		
	}
}