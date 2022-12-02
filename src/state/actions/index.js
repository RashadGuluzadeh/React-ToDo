import {ActionTypes } from './action-types'
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (data) => ({
    type : ActionTypes.ADD_TODO,
    payload: {
        id: uuidv4(),
        title: data,
    }
});

export const deleteTodo = (payload) => ({
    type: ActionTypes.DELETE_TODO,
    payload,
})

export const removeTodo = () => ({
    type : ActionTypes.REMOVE_TODO,
})