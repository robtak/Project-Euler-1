var calButton = document.getElementById('btn'); //Selects the button

//The function that does the compution when the button is clicked
calButton.onclick = function(){
	var userInput = Number(document.getElementById('input').value); //Selects and store the entered value
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
