// const initState = {
//     filters:{
//         search:'',
//         status: 'All',
//         priority:[]
//     },
//     todoList:[
//         {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
//         {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
//         {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
//     ]
// };


// const rootReducer = (state = initState, action) => {
//     console.log({state, action})
//     switch(action.type){
//         case 'todoList/addTodo':
//             return {
//                 ...state,
//                 todoList:[
//                     ...state.todoList,
//                     // {id: 5, name: 'Learn Footbal', completed: false, priority: 'Medium'}
//                     action.payload
//                 ]
//             }
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 filters:{
//                     ...state.filters,
//                     search: action.payload
//                 }
//             }
//         default:
//             return state;
//     }
// }
// export default rootReducer;


import filtersReducer from "../components/Filters/filtersSlice"
import todoListReducer from "../components/TodoList/todosSlice"

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer;