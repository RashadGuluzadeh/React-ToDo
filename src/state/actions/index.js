import {ActionTypes } from './action-types'

export const addTodo = (data) => ({
    type : ActionTypes.ADD_TODO,
    payload: {
        id: (Math.random() * 10000),
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