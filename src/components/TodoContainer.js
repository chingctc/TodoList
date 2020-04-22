import TodoList from './TodoList';
import React, { Component } from 'react';
import { INIT_TODOS } from '../constants/contants';
import update from 'immutability-helper'

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    
    this.onMarkDone = this.onMarkDone.bind(this);
    this.state = {
      todoList: INIT_TODOS,
    };
  }

  onMarkDone(id) {
    const { todoList } = this.state;
    const todo = todoList[id];
    const updateTodoList = update(todoList, {
      [id]: {$merge: {status: !todo.status}},
    });
    this.setState({
      todoList: updateTodoList,
    })
  }
  
  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default TodoContainer;