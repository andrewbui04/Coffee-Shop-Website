/*Card type options*/
  function myFunction(){
    var x = document.getElementById("mastercard_content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
  
   function myFunction2(){
    var y = document.getElementById("america_content");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
   }
  
    function myFunction3(){
        var z = document.getElementById("visa_content");
    if (z.style.display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
    }

/*Validate the form*/

/* write functions that define the action for each event */
function validate() {
	var txtfname = document.getElementById("txtfname").value;
	var gmail = document.getElementById("gmail").value;
	var phone = document.getElementById("phone").value;
	var txtaddress = document.getElementById("txtaddress").value;
	var city = document.getElementById("city").value; 
	var state = document.getElementById("state").value; 
    var zip = document.getElementById("zip").value; 

	var errMsg = "";								/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */

	/* Rule 1, check if all required inputs have value */
	/* __(9)__ */
	if (txtfname == "") { 
		errMsg += "Full name cannot be empty.\n"; 
	   } 
	   if (gmail == "") { 
		errMsg += "Gmail cannot be empty.\n"; 
	   } 
	   if (phone == "") { 
		errMsg += "Phone number cannot be empty.\n"; 
	   } 
       if (txtaddress == "") { 
		errMsg += "Address cannot be empty.\n"; 
	   } 
	   
       if (city == "") { 
		errMsg += "City cannot be empty.\n"; 
	   } 
	   
       if (state == "") { 
		errMsg += "State cannot be empty.\n"; 
	   } 
	   
	   if (zip == "") { 
		errMsg += "Zip code cannot be empty.\n"; 
	   } 

      
	   
	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
  var order_form = document.getElementById("order_form");

	/* assigns functions to corresponding events */
  order_form.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;

