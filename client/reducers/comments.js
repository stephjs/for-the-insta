function postComments(state = [], action) {
	switch(action.type) {
		case "ADD_COMMENT" :
			console.log("adding comment");
			return [
				...state, {
					user: action.author,
					text: action.comment
				}
			]
		case "REMOVE_COMMENT" :
			console.log("removing a comment");
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			]
		default : 
			return state;
	}
}

function comments(state = [], action) {
	if (typeof action.postId !== "undefined") {
		return {
			...state, // current state
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;