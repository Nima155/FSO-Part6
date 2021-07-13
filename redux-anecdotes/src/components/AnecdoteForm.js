import React from "react"
import { connect } from "react-redux"
import { anecdoteCreator } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
	const addNewAnecdote = async (event) => {
		// prevent page refresh
		event.preventDefault()
		// create the anecdote
		props.anecdoteCreator(event.target.anecdote.value)
		props.setNotification(`You created: "${event.target.anecdote.value}"`, 5)
		// set form text to empty
		event.target.anecdote.value = ""
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

const mapDispatchToProps = {
	setNotification,
	anecdoteCreator,
}
export default connect(null, mapDispatchToProps)(AnecdoteForm) // automatically dispatches all things returned by the action creators
