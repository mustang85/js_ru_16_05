import { DELETE_ARTICLE, UPDATE_ARTICLE } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function updateArticle(id, comments) {
	return {
        type: UPDATE_ARTICLE,
        payload: { id, comments }
    }
}