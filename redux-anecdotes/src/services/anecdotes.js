import axios from "axios"

const BASE_URL = "http://localhost:3001/anecdotes"

export function getAll() {
	return axios.get(BASE_URL).then((res) => res.data)
}
export function postAnecdote(content) {
	return axios.post(BASE_URL, content).then((res) => res.data)
}
