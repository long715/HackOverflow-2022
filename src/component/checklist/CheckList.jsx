//code adapted from https://codesandbox.io/s/todo-list-hooks-ebfgw?file=/src/App.js

import React, { useState } from 'react';
import data from "./Data.json";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import CheckPic from "../../resources/images/to-do-list.png";

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
    

<div className=' w-screen'>
            
<button className='absolute flex flex-col text-center items-center justify-center space-y-2 bg-[#94C6C9] h-32 w-28 left-2 bottom-2 border-2 border-[#511414] rounded-sm font-bold text-[#3F0D0D]' onClick={()=> setShow(true)}> 
    <img className='w-16 h-16' src={CheckPic}/>
    <p>Checklist</p>
</button>
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
