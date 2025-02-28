import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import { useState } from 'react';
import './todos.css';
import  TodoObject  from './component/TodoObject'

// interface TodoObject {
//   id: number,
//   text: string,
//   isComplete: boolean,
// }

function Todos(){
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = (todo: TodoObject) : void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos: TodoObject[] = [todo, ...todos];

    setTodos(newTodos);
  };


  const removeTodo = (id: number) : void => {
    const removeArr: TodoObject[] = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id: number) : void => {
    const completedTodo: TodoObject[] = todos.map((todo: TodoObject) : TodoObject => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }

      return todo;
    })

    setTodos(completedTodo);
  }

  return (
    <div>
      <div className="todo-app">
        <h1>To Do List</h1>
        <h2>오늘은 무슨 일을 계획하나요?</h2>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default Todos;
