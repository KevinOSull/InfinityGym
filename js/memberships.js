//code reference: https://www.w3schools.com/js/js_functions.asp
function calculateTotal(){ 
	//selected membership price. Code Reference: https://www.w3schools.com/js/js_htmldom_elements.asp, https://www.w3schools.com/js/js_number_methods.asp
	let membershipCost = Number(document.getElementById("membership").value); 
	let total = membershipCost;
	//Personal Training Selection. Code Reference: https://www.w3schools.com/js/js_htmldom_input.asp, https://www.w3schools.com/js/js_if_else.asp, https://www.w3schools.com/js/js_assignment.asp
	if(document.getElementById("personalTraining").checked){
		total += 100;
	}
	//Nutrition Plan Selection
	if(document.getElementById("nutritionPlan").checked){
		total += 20;
	}
	//Guest Pass
	if(document.getElementById("guestPass").checked){
		total += 10;
	}
	//Final Cost. Code Reference: https://www.w3schools.com/js/js_htmldom_nodes.asp
	document.getElementById("totalCost").textContent = "€" + total;
}