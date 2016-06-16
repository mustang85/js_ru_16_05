import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, UPDATE_ARTICLE } from '../constants'

export default (articles = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
        	return articles.filter(article => article.id != payload.id);
        case UPDATE_ARTICLE:
        	return articles.map(article => {
				return article.id == payload.id ? {...article, ...article.comments[payload.comments.length] = payload.comments.length} : article;
			})
    }

    return articles
}