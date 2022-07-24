//code adapted from https://codesandbox.io/s/todo-list-hooks-ebfgw?file=/src/App.js

import React, { useState } from 'react';
import data from "./checklistComponent/Data.json";
import ToDoList from "./checklistComponent/ToDoList";
import ToDoForm from './checklistComponent/ToDoForm';
import checklistStyle from './checklistComponent/checklistStyle.css'

function CheckList() {

  const [show,setShow] = useState(false);
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    

<div className='h-[55%] w-screen'>
            
<button className='absolute bg-[#94C6C9] h-36 w-32 left-0 bottom-0 border-2 border-[#511414] rounded-sm' onClick={()=> setShow(true)}> </button>
<div className={`flex absolute inset-0 bg-black bg-opacity-60 justify-center items-center ${show? "block":"hidden"}`}>
    <div className="bg-[#94C6C9] w-3/5 h-5/6">
        <button className='float-right mr-2 font-bold' onClick={()=>setShow(false)}>x</button>
        <div className="checkList">
      <header class ='text-xl'>
        <h1>Goals for Today </h1>
      </header>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
    </div>
    
</div>
</div>
);
}

export default CheckList;
