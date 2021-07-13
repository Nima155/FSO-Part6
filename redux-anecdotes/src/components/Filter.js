import React from "react"
import { connect } from "react-redux"
import { filterer } from "../reducers/filterReducer"
// import
const Filter = (props) => {
	const handleChange = ({ target }) => {
		// input-field value is in variable event.target.value
		props.filterer(target.value)
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
const mapDispatchToProps = {
	filterer,
}

export default connect(null, mapDispatchToProps)(Filter)
