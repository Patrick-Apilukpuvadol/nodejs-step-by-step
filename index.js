const promptSync = require('prompt-sync');
const promptInstance = promptSync({
	sigint: true // allows CTRL+C to exit the app
});

let userInput = null;
let userEnteredNumber = false;

do {
	let userInput = promptInstance("What is the coolest number in the universe?");


	if (userInput ==42){
	console.log("The universe thanks you for figuring out the answer!!");
	userEnteredNumber = true;
	} else {
	console.log("The universe seems unfulfilled... ");
	}
} while (!userEnteredNumber);
// helloWorld(userInput);


// let {messagesToShare} = require('./messageList');

// function helloWorld(someMessageToSay){
// 	console.log(someMessageToSay);
// }


// helloWorld("hello there!");

// for (const message of messagesToShare) {
// 	helloWorld(message);
// }