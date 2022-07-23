//code adapted from https://codesandbox.io/s/todo-list-hooks-ebfgw?file=/src/App.js

import React, { useState } from 'react';
import data from "./CheckList/Data.json";
import Header from "./CheckList/Header.jsx";
import ToDoList from "./CheckList/ToDoList";
import ToDoForm from './CheckList/ToDoForm';
import checklistStyle from "./CheckList/checklistStyle.css"

function CheckList() {
  
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
    <div className="checkList">
      <Header  />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default CheckList;
