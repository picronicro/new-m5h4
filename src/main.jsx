import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";

const initialState = {
    name: "",
    age: 0
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.value}
        case "SET_AGE":
            return {...state, age: action.value}
        default:
            return state
    }
}

const store = createStore(userReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
