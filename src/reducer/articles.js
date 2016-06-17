import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, UPDATE_ARTICLE } from '../constants'

export default (articles = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
        	return articles.filter(article => article.id != payload.id);
        	//во первых, это лишнее - вы таже можете реагировать на ADD_COMMENT
        case UPDATE_ARTICLE:
        	return articles.map(article => {
        			//во вторых, вы тут попробовали избавиться от мутации, но comments[payload.comments.length] = ... изменяет массив article.comments 
				return article.id == payload.id ? {...article, ...article.comments[payload.comments.length] = payload.comments.length} : article;
			})
    }

    return articles
}
