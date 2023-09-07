function function_name(){
	//function statements
}

// function function_name(parameter1=default_value1, parameter2=default_value2,...){

// 	//function body
// }

function multiplication(a,b){
	return a*b;
}

console.log(multiplication(5));
console.log(multiplication(5,10));
console.log(multiplication());

// WITH DEFAULT PARAMETERS:-
///////////////////////////////////
function multiplication(a=5,b=10){
	return a*b;
}
console.log(multiplication()); 
console.log(multiplication(2));
console.log(multiplication(3,4));
console.log(multiplication(3, undefined));
console.log(multiplication(undefined,2));


function multiplication(a,b=2){
	return a*b;
}


function calculateArea(width = 5, height = 10) {
    return width * height;
  }
  
  console.log(calculateArea());          // Output: 50 (default values)
  console.log(calculateArea(8));         // Output: 80 (default height)
  console.log(calculateArea(8, 6));      // Output: 48 (provided values)

  

  function showMessage(message, textColor = "black") {
    console.log(`Message: ${message}, Color: ${textColor}`);
  }
  
  showMessage("Hello, world!");             // Output: "Message: Hello, world!, Color: black"
  showMessage("Goodbye!", "red");           // Output: "Message: Goodbye!, Color: red"
  

