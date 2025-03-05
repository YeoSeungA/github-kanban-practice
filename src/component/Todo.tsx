import  TodoObject  from './TodoObject'

// interface TodoObject {
//   id: number,
//   text: string,
//   isComplete: boolean,
// }

interface TodoProps {
  todos: TodoObject[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
// todos, completeTodo, removeTodo 3가지를 묶어서 인터페이스로 만든다.
const Todo = ({todos, completeTodo, removeTodo}: TodoProps)  => {

  return (
    <div className='wrapper-todo'>
      {todos.map((todo, index) => {
        const todoClass = todo.isComplete ?
          'todo-row complete' :
          'todo-row';

        return (
          <div
            className={todoClass}
            key={index}
          >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
            <div className="icons">
              <i className="fas fa-times delete-icon" onClick={() => removeTodo(todo.id)}></i>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Todo
