import React, { Component } from 'react';
import './Todo.css'
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
class Todo extends Component {
  constructor(props) {
    super(props);
    
    this.onClickDone = this.onClickDone.bind(this);
  }
  
  onClickDone(){
    this.onMarkDone(this.props.todo.id);
  }

  render() {
        const todo = this.props.todo;
        const isLineThrough = todo.status==="true"?'line-through':'none';
        const newStyle= "text-decoration: " + isLineThrough;
        return (
        <div><button style={{ newStyle }} onClick={this.onClickDone}>{todo.content} </button> <Button><CloseOutlined /></Button>
        </div>
        
        );
  }
}

export default Todo;
