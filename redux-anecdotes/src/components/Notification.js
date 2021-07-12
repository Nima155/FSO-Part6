import React from "react"
import { useSelector } from "react-redux"
const Notification = () => {
	// tap into an specific part of the store
	const notification = useSelector((state) => state.notificationReducer)

	const style = {
		border: "solid",
		padding: 10,
		borderWidth: 1,
		display: notification.show ? "" : "none",
	}
	return <div style={style}>{notification.message}</div>
}

export default Notification
