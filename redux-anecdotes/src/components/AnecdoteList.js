import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { submitVote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

export default function AnecdoteList() {
	const anecdotes = useSelector(({ anecdoteReducer, filterReducer }) => {
		// filtering based on the query
		return anecdoteReducer.filter((ele) =>
			ele.content.includes(filterReducer.query)
		)
	})
	const dispatch = useDispatch()
	const vote = (id, content, votes) => {
		// not exactly great..
		dispatch(submitVote(id, { content, votes }))
		// show notification for an specified amount of time
		dispatch(setNotification(`Voted for: "${content}"`, 5))
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
							<button
								onClick={() =>
									vote(anecdote.id, anecdote.content, anecdote.votes)
								}
							>
								vote
							</button>
						</div>
					</div>
				))}
		</div>
	)
}
