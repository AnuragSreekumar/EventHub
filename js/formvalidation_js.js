var alphabeticregx = /^[A-Za-z]+$/
var numregx = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
var emailregx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validatefname(){
	var fname=document.getElementById('firstname').value;
	var errorfirstname="Enter a valid first name"

	if(fname === ''){
		document.getElementById('errorfname').innerHTML='First Name cannot be empty';
		document.getElementById('errorfname').style.visibility= "visible";
	}
	else if(!alphabeticregx.test(fname)){
		document.getElementById('errorfname').innerHTML=errorfirstname;
		document.getElementById('errorfname').style.visibility= "visible";
	} 
	else{
		document.getElementById('errorfname').innerHTML='';
		document.getElementById('errorfname').style.visibility= "hidden";
	}
}

function validatelname(){
	var lname=document.getElementById('lastname').value;
	var errorlastname="Enter a valid last name";

	if(lname === ''){
		document.getElementById('errorlname').innerHTML='Last Name cannot be empty';
		document.getElementById('errorlname').style.visibility= "visible";
	}
	else if(!alphabeticregx.test(lname)){
		document.getElementById('errorlname').innerHTML=errorlastname;
		document.getElementById('errorlname').style.visibility= "visible";
	}
	else{
		document.getElementById('errorlname').innerHTML='';
		document.getElementById('errorlname').style.visibility= "hidden";
	}
}

function validategender(){
	var gender=document.getElementById('gender').value;
	var errorgender="Invalid input";

	if(gender === '-1'){
		document.getElementById('errorgender').innerHTML=errorgender;
		document.getElementById('errorgender').style.visibility= "visible";	
	}
	else{
		document.getElementById('errorgender').innerHTML='';
		document.getElementById('errorgender').style.visibility= "hidden";		
	}
}

function validatemail(){
	var emailid=document.getElementById('email').value;
	var emailerror="Please enter a valid email id";
	if(emailid === ''){
		document.getElementById('erroremail').innerHTML='Email Id cannot be empty';
		document.getElementById('erroremail').style.visibility= "visible";
	}
	else if(!emailregx.test(emailid)){
		document.getElementById('erroremail').innerHTML=emailerror;
		document.getElementById('erroremail').style.visibility= "visible";
	}
	else{
		document.getElementById('erroremail').innerHTML='';
		document.getElementById('erroremail').style.visibility= "hidden";
	}
}

function validatenum(){
	var phone=document.getElementById('phone').value;
	var errorphone="Enter a valid Phone number";
	if(phone === ''){
		document.getElementById('errornumber').innerHTML='Number cannot be empty';
		document.getElementById('errornumber').style.visibility= "visible";
	}
	else if((!numregx.test(phone)) && ((phone.length>10) || (phone.length<10))){
		document.getElementById('errornumber').innerHTML=errorphone;
		document.getElementById('errornumber').style.visibility= "visible";	
	}
	else{
		document.getElementById('errornumber').innerHTML='';
		document.getElementById('errornumber').style.visibility= "hidden";	
	}
}

function validateuniv(){
	var univ=document.getElementById('university').value;
	var erroruniv="Invalid input";
	if(univ === '' || !alphabeticregx.test(univ)){
		document.getElementById('erroruniv').innerHTML=erroruniv;
		document.getElementById('erroruniv').style.visibility= "visible";
	}
	else{
		document.getElementById('erroruniv').innerHTML='';
		document.getElementById('erroruniv').style.visibility= "hidden";
	}
}

function validatebranch(){
	var branch=document.getElementById('branch').value;	
	var errorbranch="Invalid input";

	if(branch === '' || !alphabeticregx.test(branch)){
		document.getElementById('errorbranch').innerHTML=errorbranch;
		document.getElementById('errorbranch').style.visibility= "visible";
	}
	else{
		document.getElementById('errorbranch').innerHTML='';
		document.getElementById('errorbranch').style.visibility= "hidden";
	}
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
	var errors = false;

	if(fname === '' || !alphabeticregx.test(fname)){
		document.getElementById('errorfname').innerHTML=errorfirstname;
		document.getElementById('errorfname').style.visibility= "visible";
		errors=true;
	}
	else{
		document.getElementById('errorfname').innerHTML='';
		document.getElementById('errorfname').style.visibility= "hidden";
	}

    if(lname === '' || !alphabeticregx.test(lname)){
		document.getElementById('errorlname').innerHTML=errorlastname;
		document.getElementById('errorlname').style.visibility= "visible";
		errors=true;
	}
	else{
		document.getElementById('errorlname').innerHTML='';
		document.getElementById('errorlname').style.visibility= "hidden";
	}
	if(emailid === ''){
		document.getElementById('erroremail').innerHTML=emailerror;
		document.getElementById('erroremail').style.visibility= "visible";
		errors=true;
	}
	else{
		document.getElementById('erroremail').innerHTML='';
		document.getElementById('erroremail').style.visibility= "hidden";
	}
	if(phone === '' || !numregx.test(phone)){
		document.getElementById('errornumber').innerHTML=errorphone;
		document.getElementById('errornumber').style.visibility= "visible";
		errors=true;
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
		errors=true;
	}
	else{
		document.getElementById('errorgender').innerHTML='';
		document.getElementById('errorgender').style.visibility= "hidden";
	}

	if(!errors) {
            $('#SuccessModal').modal('show');
	}
}






/*function checkform(){
	var name = document.getElementById("firstname").value;
    var cansubmit = true;
    if (name.length == 0) {
        	cansubmit = false;
        }
    document.getElementById("submitbutton").disabled = !cansubmit;
}*/
/*function checkform(){
var elements = document.getElementById("profile").elements;
	for (var i = 0, element; element = elements[i++];) {
	    if (element.type === "text" && element.value === "")
	        console.log("it's an empty textfield")
	}
}*/
/*function checkform(){
var elements = document.getElementsByTagName("input")
for (var i = 0; i < elements.length; i++) {
    if(elements[i].value == "")
        alert('empty');
    //Do something
}
}*/