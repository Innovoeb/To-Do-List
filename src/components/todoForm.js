import React, { Component } from 'react';
import {addToDoTask} from "../actions/todoActions";

class TodoForm extends Component {
  // component's inital state
  state = {
    todo_task: ""
  }
  // onChange set the state of the targeted element to the user's input
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // on form submit, if the user input is not blank then run the addTodoTask function(pass it a to-do task)
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.todo_task !== "") {
      addToDoTask(this.state.todo_task)
    }
    this.setState({
      todo_task: ""
    })
  }
  render() {
    return (
      <div id="canvas">

        <h1 className="header">To Do List</h1>

        <div id="list-area">
          <form onSubmit={this.handleSubmit}>
            <input id="what" name="todo_task" value={this.state.todo_task} onChange={this.onChange} placeholder="What needs to be done?"></input>
          </form>
        </div>

      </div>
    )
  }
}

export default TodoForm
