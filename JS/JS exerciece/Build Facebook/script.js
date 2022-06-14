var database = [
	{
		username: "Vlad",
		password: "mypass"
	}
];

var NewsFeed = [
	{
		username: "Dima",
		timeline: "So tired from all that learning"
	},
	{
		username: "Gogi",
		timeline: "Im so exiting with that course"
	}
];

var usernamePrompt = prompt("What`s your username?");
var passwordPrompt = prompt("What`s your password?");

function signIn(user, pass) {
	if (user === database[0]. username &&
		pass === database[0]. password) {
		console.log(NewsFeed);
	} else {
		alert("Sorry, wrong username or password!");
	}
}

signIn(usernamePrompt, passwordPrompt);