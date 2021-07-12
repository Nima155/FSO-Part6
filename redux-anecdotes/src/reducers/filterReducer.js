const initialState = {
	query: "",
}
export default function filterReducer(state = initialState, action) {
	switch (action.type) {
		case "FILTER":
			return { query: action.payload.query }
		default:
			break
	}
	return state
}

export function filterer(query) {
	return {
		type: "FILTER",
		payload: { query },
	}
}
