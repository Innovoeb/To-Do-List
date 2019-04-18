import React, { Component } from "react"
import {handleClick, deleteTask} from "../actions/todoActions";

class TodoItem extends Component {

  checkOff = (e) => {
    handleClick(this.props.id)
  }

  delete = (e) => {
    e.preventDefault()
    deleteTask(this.props.id)
  }

  render () {
    return (
      <li className={this.props.status ===  "completed" ? "line" : ""}
          onClick={this.checkOff}>  {this.props.todo_task} - {this.props.status}
          <button onClick={this.delete}>X</button>
      </li>
    )
  }
}

export default TodoItem
