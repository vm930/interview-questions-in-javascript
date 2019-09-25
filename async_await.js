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
