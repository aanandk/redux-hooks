import { ADD_TODO, COMPLETE_TODO, DECREMENT, DELETE_TODO, EDIT_TODO, INCREMENT, RESET } from "./actionTypes"

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return { type: DECREMENT }
}

export const reset = () => {
    return { type: RESET }
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const completedTodo = id => {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}