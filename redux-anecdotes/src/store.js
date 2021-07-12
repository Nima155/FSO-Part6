import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"
import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux"
// for debugging
import { composeWithDevTools } from "redux-devtools-extension"

// combining two or more reducers into one
const reducer = combineReducers({
	anecdoteReducer,
	notificationReducer,
	filterReducer,
})

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
