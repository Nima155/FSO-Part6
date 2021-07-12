const initialState = {
	show: false,
	message: "",
}
export default function notificationReducer(state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case "ERROR":
			return { ...state, message: "Something went horribly wrong" }
		case "ANECDOTE":
			return {
				...state,
				message: `you created "${action.payload.text.content}"`,
			}
		case "VOTE":
			return { ...state, message: action.payload.msg }
		case "SHOW":
			return { ...state, show: action.payload.show }
		default:
			break
	}
	return state
}

export function toggleShow(show) {
	return {
		type: "SHOW",
		payload: { show },
	}
}

export function actionError() {
	return {
		type: "ERROR",
	}
}
