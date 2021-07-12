import React from "react"
import ReactDOM from "react-dom"
import store from "./store"
import { Provider } from "react-redux"
import App from "./App"

ReactDOM.render(
	// all the components contained by Provider will have access to the store
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
