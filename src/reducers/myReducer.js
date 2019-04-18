const initialState = {
  ToDo_List: [],
  filter: "all",

}

// a reducer receives actions in order to change the different application states
export default function myReducer(state = initialState, action) {
  // if action.type == add_todo_task, then update the application state of the todo_list prop(leave other props untouched) to add new data/payload which is a new todo_task)
  switch ( action.type ) {
    case 'ADD_TODO_TASK':
      return {...state, ToDo_List:[...state.ToDo_List, action.payload]}
    // if action.type == change_status, then update the application state ...
    case "CHANGE_STATUS":
      // map through the todo task list and if the task id matches the changeStatus id, change the status of the task to completed
      return {...state, ToDo_List:state.ToDo_List.map(task => {
        if (task.id === action.id) {
          return {
            todo_task: task.todo_task,
            status: "completed",
            id: task.id
          }
          // otherwise do nothing
        } else {
          return task
        }
      })
    }
    case 'UPDATE_FILTER':
      // update the state of the filter
      return {...state, filter: action.filter}
    case 'DELETE_TASK':
      // filter through the todo tasks and only return ....
       return {...state, ToDo_List: state.ToDo_List.filter(task => {
         return task.id !== action.id
       })}
    default:
      return state
  }
}
