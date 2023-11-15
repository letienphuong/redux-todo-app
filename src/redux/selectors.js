// export const todoListSelector = (state) => state.todoList;

import {createSelector} from 'reselect';

// // export const searchTextSelector = (state) => state.filters.search;
// export const todoListSelector = (state) => {
//     const searchText = (state) => state.filters.search;
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     })

//     return todoRemaining;
// }

// console.log("ABC:",searchTextSelector)


export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    //Notify: Follow index of variable
    todoListSelector, 
    filterStatusSelector,
    searchTextSelector, 
    filterPrioritySelector,
    (todoList,status, searchText, priorities) => {
        return todoList.filter((todo) => {
            if(status === 'All'){
                console.log(priorities);
                return priorities.length 
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
                ;
            }
            return (
                todo.name.includes(searchText) && 
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            )
        })
        // return todoList.filter((todo) => {
        //     if(status === 'All'){
        //         return todo.name.includes(searchText);
        //     }
        //     return (
        //         todo.name.includes(searchText) && 
        //         (status === 'Completed'
        //             ? todo.completed
        //             : !todo.completed
        //         )
        //     )
        // })
   

    // (todoList, searchText='')=> {//status => 'All' 'Completed' 'Todo'
    // return todoList.filter((todo) => {
    //     return todo.name.includes(searchText);
    // })
})