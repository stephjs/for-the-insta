//actions are objects with a type and payload

// incrememnt likes
export function increment(index) {
	return {
		type: "INCREMENT_LIKES",
		index
	}
}

// add comment
export function addComment(postId, author, comment) {
	console.log("dispatching add comment");
	return {
		type: "ADD_COMMENT",
		postId,
		author,
		comment
	}
}

// remove comment
export function removeComment(postId, i) {
	return {
		type: "REMOVE_COMMENT",
		i,
		postId,
	}
}

