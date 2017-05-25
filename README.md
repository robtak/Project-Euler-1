This project is the challenge 1 of the Project Euler Challenge.
It is a simple calculation programme that make use of;
--> The Modulo operator (%) and 
--> The for loop
The '%' operator and 'for loop' is used in Java Script to compute the sum of the multiple of 3 and 5 below 1000 which 233168.

Below is the Java Script Code 

var calButton = document.getElementById('btn'); //Selects the button

//The function that does the compution when the button is clicked

calButton.onclick = function(){
	var userInput = Number(document.getElementById('input').value);    //Selects and store the entered value
	var i = 0;		//Iteration variable
	var sumOfMultiples = 0;		//variable for the sum of the multiples  
	for (i; i < userInput; i++){

		//Checks for modulo of 3 & 5 that return 0 base on user input

		if (i%3 ===0 || i%5 === 0){
			sumOfMultiples = sumOfMultiples + i; //Sums up all the multiples of 3 & 5
		}

	document.getElementById('demo').innerHTML = sumOfMultiples; //Return the sum of the multiples of 3 & 5.

	}
}
