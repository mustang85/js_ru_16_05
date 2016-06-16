import { ADD_COMMENT } from '../constants'

export function addComment(id, comment) {
    return {
        type: ADD_COMMENT,
        payload: { id, comment }
    }
}