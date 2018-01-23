// Variable for length of desired password (can change)
const length = 8;
// String of possible alphabetical characters
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Variable to store final password
let password = '';

// Keep generating characters for desired length of password
for (var i = 0; i < length; i++) {
	let num = Math.floor(Math.random() * 2);
	if (num === 0) {
		// Generate a number between 0 and 9
		let num2 = Math.floor(Math.random() * 10);
		// Add that digit to 'password'
		password += num2.toString();
	} else {
		// Generate number between 0 and 51
		let num3 = Math.floor(Math.random() * 52);
		// Grab a letter from 'letters' string
		let character = letters[num3];
		// Add that letter to 'password'
		password += character;
	}
}

// Display final password
console.log(password);
