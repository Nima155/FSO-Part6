const initialState = {
	show: false,
	message: "",
}
export default function notificationReducer(state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case "ANY_NOTIF":
			return { ...state, message: action.payload.msg }
		case "SHOW":
			return { ...state, show: action.payload.show }
		default:
			break
	}
	return state
}
// global timer handle for internal use
let timer
export function setNotification(msg, delay) {
	return async (dispatch) => {
		clearTimeout(timer) // reset previous timer if any...
		dispatch({
			type: "ANY_NOTIF",
			payload: { msg },
		})
		dispatch(toggleShow(true))
		timer = setTimeout(() => {
			dispatch(toggleShow(false))
		}, delay * 1000)
	}
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
