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
        <div>
            <form onSubmit={handleSubmit}>
                <input value={userInput} type="text" onChange={handleChange} placeholder="Enter goals..."/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ToDoForm;