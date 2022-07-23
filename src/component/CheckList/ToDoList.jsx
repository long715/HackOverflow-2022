import React from 'react';
import ToDo from './ToDo';
import './CheckListStyle.css';

//the container that holds all of todos
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className ="container">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '5px'}} onClick={handleFilter}>༻ Clear Completed ༺ </button>
        </div>
    );
};

export default ToDoList;