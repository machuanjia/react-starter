/** @format */

// let num = 0
// export const addTodo = (text: string) => {
//     return {
//         type: 'ADD_TODO',
//         id: num++,
//         text,
//     }
// }
import * as actionTypes from './action-types'

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

export function addArticle(article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article,
    }

    return simulateHttpRequest(action)
}

export function removeArticle(article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE,
        article,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ArticleAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}
