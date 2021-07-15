import React, { useEffect } from "react"
import AnecdoteForm from "./components/AnecdoteForm"
import Notification from "./components/Notification"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import { useDispatch } from "react-redux"

import { intializeAnecdote } from "./reducers/anecdoteReducer"

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(intializeAnecdote())
	}, [dispatch])
	return (
		<div>
			<h2>Anecdotes</h2>
			<Filter />
			<Notification />
			<AnecdoteList />
			<AnecdoteForm />
		</div>
	)
}

export default App
