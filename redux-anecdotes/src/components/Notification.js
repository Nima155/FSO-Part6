import React from "react"
import { connect } from "react-redux"
const Notification = (props) => {
	// tap into an specific part of the store

	const style = {
		border: "solid",
		padding: 10,
		borderWidth: 1,
		display: props.notification.show ? "" : "none",
	}
	return <div style={style}>{props.notification.message}</div>
}
const mapStateToProps = (state) => {
	return {
		notification: state.notificationReducer,
	}
}
export default connect(mapStateToProps)(Notification) // using connect
