import React, {Component} from "react";
import { connect } from "react-redux";
import TodoItem from "./todoitem";
import { updateFilter } from "../actions/todoActions";

class TodoList extends Component {

  changeFilter = (filter) => {
    updateFilter(filter)
  }

  render() {
    return (
      <div id="to-do-list">
        <ul>
          <p>{this.props.ToDo_List.filter(task => task.status === "pending").length} tasks left</p>
          <div>
            <button onClick={() => this.changeFilter("all")}>Show All</button>
            <button onClick={() => this.changeFilter("pending")}>In Progress</button>
            <button onClick={() => this.changeFilter("completed")}>Completed</button>
          </div>
          {this.props.ToDo_List.filter(task => {
            if (this.props.filter === "all") {
              return true
            }

            return task.status === this.props.filter
          }).map(task => (
            <TodoItem {...task} />

          ))}

        </ul>
      </div>

    )
  }

}
// function that maps the application state to props
function mapStateToProps(appState) {
  return {
    ToDo_List: appState.ToDo_List,
    filter: appState.filter
  }
}
// connect() is a higher order component that ...
export default connect(mapStateToProps)(TodoList)
