import React from "react"
import { useDispatch } from "react-redux"
import { anecdoteCreator } from "../reducers/anecdoteReducer"
import { toggleShow } from "../reducers/notificationReducer"

const AnecdoteForm = ({ timerReference }) => {
	const dispatch = useDispatch()
	const addNewAnecdote = async (event) => {
		// prevent page refresh
		event.preventDefault()
		// create the anecdote
		dispatch(anecdoteCreator(event.target.anecdote.value))
		// set form text to empty
		event.target.anecdote.value = ""

		dispatch(toggleShow(true))
		clearTimeout(timerReference.current)
		timerReference.current = setTimeout(() => {
			dispatch(toggleShow(false))
		}, 5000)
	}
	return (
		<>
			<h2>create new</h2>
			<form onSubmit={addNewAnecdote}>
				<div>
					<input name="anecdote" />
				</div>
				<button>create</button>
			</form>
		</>
	)
}
export default AnecdoteForm
