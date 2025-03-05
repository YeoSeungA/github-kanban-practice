import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import { useState } from 'react';
import './todos.css';
import  TodoObject  from './component/TodoObject'

// interface TodoObject {
//   id: number,
// if (!todo.text || /^\s*$/.test(todo.text)) 옆 조건 때문에 ?로 표현할 수 있다.
//   text?: string,
//   isComplete: boolean,
// }

function Todos(){
  // [todos, setTodos] 타입은 useState가 결정한다. 구조분해할당 첫번째 요소는 todos, 두번째느 setTodos 를 갖는다.
  // state의 타입을 지정하는 방법법
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = (todo: TodoObject) : void => {
    // undefined도 false한 값값
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
