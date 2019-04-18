import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux';
import store from '../store';
import TodoForm from "./todoForm";
import TodoList from "./todoList";




class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div>
          <TodoForm />
          <TodoList />

        </div>
      </Provider>


    )

  }

}

export default App;
