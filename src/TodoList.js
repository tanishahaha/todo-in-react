import React from 'react';
import {FaTrash} from 'react-icons/fa6';

export default function TodoList( {taskList, handleToggleComplete, handleDeleteTask }){
  return(
    <div className='todo_cont'>
      {taskList.map((task,index) =>(
        <div className={`todo_box ${task.completed ? "completed" : ""}`}>
          <div className='task_cont'>

          <input type='checkbox' onChange={()=>handleToggleComplete(index)} checked={task.completed}/>

          <input type='text' value={task.task} readOnly/>

          </div>

          <FaTrash className="icon_fawe" onClick={()=> handleDeleteTask(index)}/>

        </div>
      ))}
      
    </div>
  );
}