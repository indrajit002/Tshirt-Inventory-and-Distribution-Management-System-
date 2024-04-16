 import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import EmailForm from "./pages/Email/email-diagram"

import store from "./store"
// import EmailForm from "./pages/Email/email-form"

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <EmailForm/>
    </BrowserRouter>
  </Provider>
 
 
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()
