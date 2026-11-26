//create objects
//code Reference: https://www.w3schools.com/js/js_project_form_validation.asp
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const membershipInput = document.getElementById("membership");
const messageInput = document.getElementById("message");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const membershipError = document.getElementById("membershipError");
const messageError = document.getElementById("messageError");
const form = document.getElementById("joinForm");
const result = document.getElementById("result");

//display error
function showError(errorId, message){ 
	errorId.innerHTML = message;
}

//clear the error
function clearError(errorId){
	errorId.innerHTML = "";
}

//validate first name
function validateFirstName(){
	let value = firstNameInput.value.trim();
	if (value.length < 2){
		showError(firstNameError, "Please enter your first name.");
		return false;
	}
	if (value.length > 30){
		showError(firstNameError, "First name cannot exceed 30 characters.");
		return false;
	}
	clearError(firstNameError);
	return true;
}

//validate last name
function validateLastName(){
	let value = lastNameInput.value.trim();
	if (value.length < 2){
		showError(lastNameError, "Please enter your last name.");
		return false;
	}
		if (value.length > 30){
		showError(lastNameError, "Last name cannot exceed 30 characters.");
		return false;
	}
	clearError(lastNameError);
	return true;
}

//validate email
function validateEmail(){
	let value = emailInput.value.trim();
	if(value.length < 6){
		showError(emailError, "Email must be at least 6 characters.");
		return false;
	}
	if(value.length > 100){
		showError(emailError, "Email cannot exceed 100 characters.");
		return false;
	}
	if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))){
		showError(emailError, "Enter a valid email address.");
		return false;
	}
	clearError(emailError);
	return true;
}

//validate phone
function validatePhone(){
	let value = phoneInput.value.trim();
	if(value.length < 7){
		showError(phoneError, "Phone number must be at least 7 characters.");
		return false;
	}
	if(value.length > 20){
		showError(phoneError, "Phone number cannot exceed 20 characters.");
		return false;
	}
	if(!(/^\+?[0-9 ]{7,20}$/.test(value))){
		showError(phoneError, "Enter a valid phone number.");
		return false;
	}
	clearError(phoneError);
	return true;
}

//validate membership
function validateMembership(){
	if(membershipInput.value === ""){
		showError(membershipError, "Please choose a membership type.");
		return false;
	}
	clearError(membershipError);
	return true;
}

//validate messge
function validateMessage(){
	let value = messageInput.value;
	if(value.length > 500){
		showError(messageError, "Your message cannot exceed 500 characters.");
		return false;
	}
	clearError(messageError);
	return true;
}

//validate form
function validateForm(){
	let okFirstName = validateFirstName();
	let okLastName = validateLastName();
	let okEmail = validateEmail();
	let okPhone = validatePhone();
	let okMembership = validateMembership();
	let okMessage = validateMessage();
	return okFirstName && okLastName && okEmail && okPhone && okMembership && okMessage;
}

//prevent reloading
form.addEventListener("submit", function(event){
	event.preventDefault();

	//clear result
	result.innerHTML = "";
	result.className= "";
	
	//validate form
	if (validateForm()){
		result.innerHTML = "Thank you for your enquiry! Our team will be in touch soon.";
		result.className = "valid"; 
		form.reset();
	} 
	else{
		result.innerHTML = "Please fix the errors above.";
		result.className = "invalid";
	}
});

// Clear when user starts typing
form.addEventListener("input", function(){
	result.innerHTML = "";
});