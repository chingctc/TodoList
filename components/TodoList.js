import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const {todoList, onMarkDone} = this.props;
    return (
      <div>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} onMarkDone={onMarkDone}/>
        ))}
      </div>
    );
  }
}

export default TodoList;