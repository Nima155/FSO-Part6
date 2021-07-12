import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { submitVote } from "../reducers/anecdoteReducer"
import { toggleShow } from "../reducers/notificationReducer"

export default function AnecdoteList({ timerReference }) {
	const anecdotes = useSelector(({ anecdoteReducer, filterReducer }) => {
		// filtering based on the query
		return anecdoteReducer.filter((ele) =>
			ele.content.includes(filterReducer.query)
		)
	})
	const dispatch = useDispatch()
	const vote = (id, content) => {
		dispatch(submitVote(id, `you voted for "${content}"`))
		dispatch(toggleShow(true))
		// reset the timer so that the notification is always shown for at least 5 seconds
		clearTimeout(timerReference.current)
		timerReference.current = setTimeout(() => {
			dispatch(toggleShow(false))
		}, 5000)
	}

	return (
		<div>
			{anecdotes
				.sort((a, b) => b.votes - a.votes)
				.map((anecdote) => (
					<div key={anecdote.id}>
						<div>{anecdote.content}</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => vote(anecdote.id, anecdote.content)}>
								vote
							</button>
						</div>
					</div>
				))}
		</div>
	)
}
