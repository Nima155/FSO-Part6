import deepFreeze from "deep-freeze"
import counterReducer from "./reducer"

describe("unicafe reducer", () => {
	const initialState = {
		good: 0,
		ok: 0,
		bad: 0,
	}
	const randomState = {
		good: 10,
		bad: 15,
		ok: 20,
	}
	test("should return a proper initial state when called with undefined state", () => {
		const state = {}
		const action = {
			type: "DO_NOTHING",
		}

		const newState = counterReducer(undefined, action)
		expect(newState).toEqual(initialState)
	})

	test("good is incremented", () => {
		const action = {
			type: "GOOD",
		}
		const state = initialState

		deepFreeze(state)
		const newState = counterReducer(state, action)
		expect(newState).toEqual({
			good: 1,
			ok: 0,
			bad: 0,
		})
	})
	test("ok is incremented", () => {
		// action which is sent to the reducer
		const action = {
			type: "OK",
		}
		const state = initialState
		// making sure that the state is not directly changed in the reducer
		deepFreeze(state)

		const newState = counterReducer(state, action)

		expect(newState).toEqual({ good: 0, bad: 0, ok: 1 })
	})
	test("bad is incremented", () => {
		const action = {
			type: "BAD",
		}

		const state = initialState

		deepFreeze(state)

		const newState = counterReducer(state, action)

		expect(newState).toEqual({ good: 0, bad: 1, ok: 0 })
	})

	test("zero resets the stats", () => {
		const action = {
			type: "ZERO",
		}
		const state = randomState

		deepFreeze(state)

		const newState = counterReducer(state, action)

		expect(newState).toEqual(initialState)
	})
})
