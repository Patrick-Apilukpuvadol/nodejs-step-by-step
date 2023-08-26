const promptSync = require('prompt-sync');
const promptInstance = promptSync({
	sigint: true // allows CTRL+C to exit the app
});


class SomeCustomError extends Error {
	constructor(message = "Some error happened, write a better message lol"){
		super();

		this.statusCode = 404;

		this.message = message;
	}
}

function app(){
	const promptSync = require('prompt-sync');
	const promptInstance = promptSync({
		sigint: true // allows CTRL+C to exit the app
	});


let userInput = null;
let userEnteredNumber = false;

do {
	let userInput = promptInstance("What is the coolest number in the universe?");

	if (!parseInt(userInput) && !parseFloat(userInput)){
		throw "User did not enter a number";
	}


	if (userInput ==42){
	console.log("The universe thanks you for figuring out the answer!!");
	userEnteredNumber = true;
	} else {
	console.log("The universe seems unfulfilled... ");
	}
} while (!userEnteredNumber);

}

try {
	app();
	console.log("app executed successfully");
} catch (error) {
	if (error.statusCode){
		console.log(`Error${error.statusCode}, its message is: ${error.message}`);
	} else {
		console.log("An error occurred" + error.message);
	}

} finally {
	console.log("App has finished running. Pretend there's nice DB closing code here.")
}
// helloWorld(userInput);


// let {messagesToShare} = require('./messageList');

// function helloWorld(someMessageToSay){
// 	console.log(someMessageToSay);
// }


// helloWorld("hello there!");

// for (const message of messagesToShare) {
// 	helloWorld(message);
// }

