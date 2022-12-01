import { ActionTypes } from "../actions/action-types"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todo: []
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TODO: 
            const { id, title} = payload
            return {
                ...state,
                todo : [
                    ...state.todo,
                    {
                        id: uuidv4(),
                        title: title,
                    }
                ]
            }
        case ActionTypes.DELETE_TODO :
                const newTodo = state.todo.filter((item) => item.id !== payload)
                return {
                    ...state,
                    todo : newTodo,
                }

        case ActionTypes.REMOVE_TODO : 
                return {
                    ...state,
                    todo : [],
                }
        default: return state
    }
}

export default reducer
