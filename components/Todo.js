import React, { Component } from 'react';
import './Todo.css'
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import TodoListApi from '../apis/TodoListApi'

class Todo extends Component {
  constructor(props) {
    super(props);
    
    this.onClickDone = this.onClickDone.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  
  onClickDone(){
    this.onMarkDone(this.props.todo.id);
  }

  onClickDelete(id){
    TodoListApi.deleteTodoItem(id).then((response) => {
        const newTodoList = response.data;
          this.setState({ todoList: newTodoList});
        })
  }

  render() {
        const todo = this.props.todo;
        const isLineThrough = todo.status==="true"?'line-through':'none';
        const newStyle= "text-decoration: " + isLineThrough;
        return (
        <div><Button style={{ newStyle }} onClick={this.onClickDone}>{todo.content} </Button> 
        <Button onClick={this.onClickDelete(todo.id)}><CloseOutlined /></Button>
        </div>
        
        );
  }
}

export default Todo;
