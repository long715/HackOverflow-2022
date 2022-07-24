import React from 'react';
import ToDo from './ToDo';
import './checklistStyle.css'

//the container that holds all of todos
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ul>
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    </ul>
                    
                )
            })}
            <button style={{margin: '4px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;