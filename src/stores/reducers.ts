/** @format */
// const initialTodos:any = []
// const todos = (state = initialTodos, action: any) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     id: action.id,
//                     completed: false,
//                 },
//             ]
//         default:
//             return state
//     }
// }

// export default todos

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

const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: 'post 1',
            body: 'Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi',
        },
        {
            id: 2,
            title: 'post 2',
            body: 'Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint',
        },
    ],
}

const reducer = (state: ArticleState = initialState, action: ArticleAction): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(), // not really unique
                title: action.article.title,
                body: action.article.body,
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(article => article.id !== action.article.id)
            return {
                ...state,
                articles: updatedArticles,
            }
    }
    return state
}

export default reducer
