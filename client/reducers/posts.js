// a reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of current state

function posts(state = [], action) {
	switch(action.type) {
		case "INCREMENT_LIKES" :
			const i = action.index;
			console.log("incrementing likes");
			return [
				//take a spread and update the one we want
				...state.slice(0, i),
				{ ...state[i], likes: state[i].likes + 1 },
				...state.slice(i +1),
			]
		default:
			return state;
	}
	
}

export default posts;