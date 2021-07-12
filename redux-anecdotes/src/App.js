import React, { useEffect, useRef } from "react"
import AnecdoteForm from "./components/AnecdoteForm"
import Notification from "./components/Notification"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import { useDispatch } from "react-redux"

import { intializeAnecdote } from "./reducers/anecdoteReducer"

const App = () => {
	// this is a reference to a timer.. used for showing notifications for an specific amount of time
	const ref = useRef()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(intializeAnecdote())
	}, [dispatch])
	return (
		<div>
			<h2>Anecdotes</h2>
			<Filter />
			<Notification />
			<AnecdoteList timerReference={ref} />
			<AnecdoteForm timerReference={ref} />
		</div>
	)
}

export default App
