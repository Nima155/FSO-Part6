import React from "react"
import { useDispatch } from "react-redux"
import { filterer } from "../reducers/filterReducer"
// import
const Filter = () => {
	const dispatch = useDispatch()
	const handleChange = ({ target }) => {
		// input-field value is in variable event.target.value
		dispatch(filterer(target.value))
	}
	const style = {
		marginBottom: 10,
	}

	return (
		<div style={style}>
			filter <input onChange={handleChange} />
		</div>
	)
}

export default Filter
