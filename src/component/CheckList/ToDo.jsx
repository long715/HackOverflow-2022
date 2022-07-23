import React from 'react';
import checklistStyle from './checklistStyle.css';

//one row in out todo list 
const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className= {("todo text-black ") + (todo.complete ? "line-through" : "")}>
            {todo.task}
        </div>
    );
};

export default ToDo;