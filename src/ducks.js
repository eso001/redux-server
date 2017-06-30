import app, {epics as appEpics} from './pageContainers/app/redux'
import {combineReducers} from 'redux';
import { combineEpics } from 'redux-observable'

export default combineReducers({
    app
})
export const epics = combineEpics(
    appEpics
)