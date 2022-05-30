import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from "../actions/actionTypes";

// const initialState = {
//     todoList: [],
// }
const initialState = []

const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    // console.log('payload, state:', payload, state)
    // console.log('payload', payload, action)

    switch (type) {
        case ADD_TODO:
            console.log('reducer state:', state)
            // return {
            //     ...state,
            //     todoList: [...state.todoList, payload]
            // }
            return [
                ...state,
                {
                    id: payload.id,
                    todo: payload.todo,
                    isCompleted: payload.isCompleted
                }
            ]
        case EDIT_TODO:
            return [
                ...state.map(todo => {
                    if (todo.id === payload.id) {
                        return {
                            ...todo,
                            todo: payload.todo
                        }
                    }
                    return todo;
                })
            ]
        case DELETE_TODO:
            // console.log(state, payload.id)
            return [...state.filter(todo => todo.id !== payload)]
        case COMPLETE_TODO:
            return [
                ...state.map(todo => {
                    if (todo.id === payload) {
                        alert(payload)
                        return {
                            ...todo,
                            isCompleted: true
                        }
                    }
                    return todo;
                })
            ]
        default:
            return state;
    }

}

export default todoReducer;