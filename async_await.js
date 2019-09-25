/*
Rewriting promises with async and await with error handling  
*/

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }

// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

const loadJson = async (url) => {
	const res = await fetch(url);
	if (res.status == 200) {
		let json = await res.json();
		return json;
	} else {
		throw new Error(res.status);
	}
};

//Rewrite it using async/await instead of .then/catch with a class

class HttpError extends Error {
	constructor(response) {
		super(`${response.status} for ${response.url}`);
		this.name = 'HttpError';
		this.response = response;
	}
}

function loadJson(url) {
	return fetch(url).then((response) => {
		if (response.status == 200) {
			return response.json();
		} else {
			throw new HttpError(response);
		}
	});
}

// Below you can find the “rethrow” example from the chapter Promises chaining.Rewrite it using async / await instead of.then /catch.

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new HttpError(response);
//             }
//         })
// }

// Ask for a user name until github returns a valid user

/*
function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            alert(`Full name: ${user.name}.`);
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}

demoGithubUser();

*/

async function loadJson(url) {
	const res = await fetch(url);
	if (res.status == 200) {
		let json = await res.json();
		return json;
	} else {
		throw new HttpError(response);
	}
}

async function demoGithubUser() {
	let name = prompt('Enter a name?', 'iliakan');
	try {
		let user = await loadJson(`https://api.github.com/users/${name}`);
		alert(`Full name: ${user.name}.`);
		return user;
	} catch (err) {
		if (err instanceof HttpError && err.response.status == 404) {
			alert('No such user, please reenter.');
			return demoGithubUser();
		} else {
			throw err;
		}
	}
}
demoGithubUser();

//We have a “regular” function. How to call async from it and use its result?

/*

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    // ...what to write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
}

*/

async function wait() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return 10;
}

function f() {
	//shows 10 after 1 second
	wait().then((result) => console.log(result));
}

f();
