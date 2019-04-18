import store from '../store'
let id = 0
// so we can use store.dispatch()

// actions perform all the work in our app so components can just render

// export a function that adds a todo task, the status of that task, and send it to the application store
export function addToDoTask(todo_task) {
  id++
  store.dispatch({
    type: "ADD_TODO_TASK",
    payload: {
      todo_task: todo_task,
      status: "pending",
      id: id,

    }
  })
}
// export a function that changes the status of a todo task when clicked on
export function handleClick(id) {
  store.dispatch({
    type: "CHANGE_STATUS",
    id: id,
  })
}
// export a function that only changes the filter in the todo list
export function updateFilter(filter) {
  store.dispatch({
    type: 'UPDATE_FILTER',
    filter: filter,
  })
}

export function deleteTask(id) {
  store.dispatch({
    type: 'DELETE_TASK',
    id: id,

  })
}
