const length = 8;
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let password = '';

for (var i = 0; i < length; i++) {
	let num = Math.floor(Math.random() * 2);
	if (num === 0) {
		let num2 = Math.floor(Math.random() * 10);
		password += num2.toString();
	} else {
		let num3 = Math.floor(Math.random() * 52);
		let character = letters[num3];
		password += character;
	}
}

console.log(password);