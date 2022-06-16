var database = [
	{
		username: "Vlad",
		password: "mypass"
	},
	{
		username: "Dima",
		password: "mypassw"
	},
	{
		username: "Gogi",
		password: "mypassword"
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

var usernamePrompt = prompt("What\`s your username?");
var passwordPrompt = prompt("What\`s your password?");

function isValidUser(user, pass) {
		for (var i=0; i < database.length; i++) {
		if(database[i].username === user &&
			database[i].password === pass) {
			return true;
		}
	}
	return false;
}	


function signIn(user, pass) {
	if (isValidUser(user, pass)) {
		console.log(NewsFeed);
	} else {
		alert("Sorry, wrong username or password!");
	}
}

signIn(usernamePrompt, passwordPrompt);