import React, { useState } from 'react';
import checklistStyle from './checklistStyle.css'

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit} className='submitForm'>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button className='submitBtn'>Submit</button>
        </form>
    );
};

export default ToDoForm;