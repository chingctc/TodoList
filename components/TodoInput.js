import React, { Component } from 'react'
import TodoListApi from '../apis/TodoListApi'

class TodoInput extends Component {
  onAdded() {
    const {input} = this.id
    const todo = this.props.todo;
    TodoListApi.postNewTodoItem(input.value).then((response) => {
      const newTodo = response.data.content;
      this.setState({ 
        id:todo.id +1,
        content:newTodo,
        status: false
        });
    })
  }


  render() {
    return (
      <div>
        <form>
        <input onSubmit={this.onAdded} id="input" placeholder="Enter new todo..."/>
        </form>
        </div>
    )
  }
}

export default TodoInput;