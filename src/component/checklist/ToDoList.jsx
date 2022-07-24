import React from 'react';
import ToDo from './ToDo';
import checklistStyle from './checklistStyle.css'

//the container that holds all of todos
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button className='clearBtn' style={{margin: '4px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;