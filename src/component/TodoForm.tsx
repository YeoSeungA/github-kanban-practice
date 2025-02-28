import { useState, useEffect, useRef } from 'react';
import  TodoObject  from './TodoObject'

// interface TodoObject {
//   id: number,
//   text: string,
//   isComplete: boolean,
// }

interface TodoProps{
onSubmit: (todo: TodoObject) => void;
}

function TodoForm(props: TodoProps) {
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNumber(number + 1);

    props.onSubmit({
      id: number,
      text: input,
      isComplete: false,
    });

    setInput('');
  }

  return (
    <form id="todoForm" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm
