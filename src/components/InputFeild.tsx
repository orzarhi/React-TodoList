import React, { useRef } from 'react'
import "./InputFeild.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className='input' onSubmit={e => {
            handleAdd(e)
            inputRef.current?.blur();
        }}>
            <input
                className='input_box'
                value={todo}
                ref={inputRef}
                onChange={e => setTodo(e.target.value)}
                placeholder='Enter a task' />
            <button className='input_submit' type='submit' >Go</button>
        </form>
    )
}

export default InputFeild