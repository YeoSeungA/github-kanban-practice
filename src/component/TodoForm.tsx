import { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import  TodoObject  from './TodoObject'

// interface TodoObject {
//   id: number,
//   text: string,
//   isComplete: boolean,
// }

interface TodoFormProps{
onSubmit: (todo: TodoObject) => void;
}

const TodoForm = (props: TodoFormProps) => {
  const [input, setInput] = useState<string>('');
  const [number, setNumber] = useState<number>(1);
  // inputRef는 우리가 작성하고 있는 input된 element
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  })
// React.ChangeEvent<HTMLInputElement> 를 넣으면 react에 종속된다. js or html로 넣어주는게 맞다.
// input 창에서 바뀔때
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
