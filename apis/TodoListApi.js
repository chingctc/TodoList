import axios from 'axios';

class TodoListApi {
  static getAllTodoItem() {
    const GET_TODO_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos";
    return axios.get(GET_TODO_URL);
  }

  static postNewTodoItem(todo, id) {
    const POST_TODO_URL = "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters/" + id;
    return axios.put(POST_TODO_URL, {content: todo});
  }

  static deleteTodoItem(id) {
    const DELETE_TODO_URL = "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters/" + id;
    return axios.delete(DELETE_TODO_URL);
  }
}

export default TodoListApi;