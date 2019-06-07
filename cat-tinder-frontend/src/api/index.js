import fetch from 'isomorphic-fetch'

// the address of our rails backend, saved as a constant value, because we never want to accidentally change it
const BASE = 'http://18.191.185.157:3000'

let getCats = function() {
// the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
	return fetch(BASE + '/cats') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
		.then((resp) => {
			debugger
           	// resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
			let json = resp.json() // we want to make sure what we have is just the json part of the response
			console.log(json);
			return json
		})
}

export  {
	getCats
}