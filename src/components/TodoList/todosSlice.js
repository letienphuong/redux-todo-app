
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoListSlice =  createSlice({
    name: 'todoList',
    // initialState:[
    //     {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
    //     {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
    //     {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
    // ],
    initialState:{status: 'idle', todos: []},
    reducers:{
        addTodo:(state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus:(state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if(currentTodo){
                currentTodo.completed = !currentTodo.completed
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.status = 'idle';
        }).addCase(addNewTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        }).addCase(updateTodo.fulfilled, (state, action) => {
            let currentTodo = state.todos.find((todo) => todo.id === action.payload);
            currentTodo = action.payload
        })
    }
});
export default todoListSlice;

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async() => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return data.todos;
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async(newTodo) => {
    const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo)
    })
    const data = await res.json();
    return data.todos;
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async(updateTodo) => {
    const res = await fetch('/api/updateTodo', {
        method: 'POST',
        body: JSON.stringify(updateTodo),
    })
    const data = await res.json();
    console.log(data);
    return data.todos;
})


// export function addTodos(todo){//thunk function - thunk action
//     return function addTodoThunk(dispatch, getState){
//         console.log("Add todo thunk: ", getState())
//         console.log({todo})
//         //custom
//         todo.name = 'Phuong Test'
//         dispatch(todoSlice.actions.addTodo(todo));
//         console.log('thunk', getState())
//     }
// }