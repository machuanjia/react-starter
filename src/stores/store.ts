/** @format */

// import {createStore, combineReducers} from 'redux'
// import todos from './reducers'
// const store = createStore(combineReducers({todos}))
// export default store

import {createStore, applyMiddleware, Store} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

interface IArticle {
    id: number
    title: string
    body: string
}

type ArticleState = {
    articles: IArticle[]
}

type ArticleAction = {
    type: string
    article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction

const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

export default store
