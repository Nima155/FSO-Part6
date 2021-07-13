// const anecdotesAtStart = [
// 	"If it hurts, do it more often",
// 	"Adding manpower to a late software project makes it later!",
// 	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
// 	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
// 	"Premature optimization is the root of all evil.",
// 	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ]
import { getAll, postAnecdote, voteAndecdote } from "../services/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0,
	}
}

// const initialState = anecdotesAtStart.map(asObject)

// a pure reducer -> pure refers to how it doesn't mutate the state
const reducer = (state = [], action) => {
	switch (action.type) {
		case "SUBMIT_VOTE":
			return state.map((state) =>
				state.id === action.payload.id
					? { ...state, votes: state.votes + 1 }
					: state
			)
		case "ANECDOTE":
			return [...state, action.payload.text]
		case "INIT_ANECDOTE":
			return action.payload.data
		default:
			break
	}

	return state
}
// an action creator function
export function submitVote(id, pack) {
	return async (dispatch) => {
		await voteAndecdote(id, pack)
		dispatch({
			type: "SUBMIT_VOTE",
			payload: { id },
		})
	}
}

export function anecdoteCreator(content) {
	return async (dispatch) => {
		const text = await postAnecdote({
			content,
			votes: 0,
		})
		dispatch({
			type: "ANECDOTE",
			payload: { text },
		})
	}
}

export function intializeAnecdote() {
	// made possible by redux-thunk
	return async (dispatch) => {
		const data = await getAll()
		dispatch({
			type: "INIT_ANECDOTE",
			payload: { data },
		})
	}
}
export default reducer
