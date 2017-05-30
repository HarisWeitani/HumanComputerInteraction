
function doValidation(){

	var name=document.getElementById('fullName');
	var email=document.getElementById('email');
	var address=document.getElementById('address');
	var error=document.getElementById('err');
	var agree=document.getElementById('agreement');
	var country=document.getElementById('countryList');
	var custom=document.getElementById('customAmount');


	if(name.value==""){
		error.innerHTML="Please enter your name!";
	}

	else if(email.value==""){
		error.innerHTML="Please enter your email!";
	}

	else if(email.value!="" && email.value.indexOf("@")==-1){
		error.innerHTML="Wrong email format!";
	}

	else if(address.value==""){
		error.innerHTML="Please enter your address!";
	}

	else if(address.value!="" && address.value.length<5){
		error.innerHTML="Wrong address format!";
	}

	else if(country.value==""){
		error.innerHTML="Please choose your country!";
	}

	else if(!agree.checked){
		error.innerHTML="You must agree terms!";
	}

	else if(custom.value!="" && isNaN(custom.value)){
		error.innerHTML="Money must be a digit!";
	}

	else{
		error.innerHTML="Thank You for your Help!";
	}




	
	





	

}