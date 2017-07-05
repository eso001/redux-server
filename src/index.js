import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import App from './pageContainers/app/AppContainer'
import reducers, {epics} from './dux'

const epicMiddleware = createEpicMiddleware(epics)

const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = createStore(reducers, preloadedState, applyMiddleware(epicMiddleware))
render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('react-container'))
