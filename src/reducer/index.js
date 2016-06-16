import { combineReducers } from 'redux'
import articles from './articles'
import counterReducer from './counter'
import comments from './comments'

export default combineReducers({
    articles,
    count: counterReducer,
    comments
})