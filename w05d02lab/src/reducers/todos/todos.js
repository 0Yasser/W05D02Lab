const initialState = {todos:[]}

const todos = (state=initialState,{type,payload})=>{
    switch (type) {
        case "ADD_TODOS":
            return{todos:payload}
        case 'ADD_TODO':
            return{todos:[...state.todos,payload]};
        case 'REMOVE_TODO':
            return{todos:state.todos.filter((e)=>{
                return e.id!=payload.id;
            })};
        default:
            return state;
    }
}

export default todos;

export const addTodos = (todos) =>{
    return {
        type: "ADD_TODOS",
        payload: todos,
    }
}

export const addTodo = (todos) =>{
    return {
        type: "ADD_TODO",
        payload: todos,
    }
}
export const removeTodo = (todos) =>{
    return {
        type: "REMOVE_TODO",
        payload: todos,
    }
}
