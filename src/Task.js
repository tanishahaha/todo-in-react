import {React, useState} from 'react';
import TodoList from './TodoList';

function Task(){
  const [task,setTask]=useState("");
  const [taskList,setTaskList]=useState([]);

  function handleChange(event){
    setTask(event.target.value);
  }

  function handleClick(){
    if(task){
      setTaskList((prevtasklist) => [...prevtasklist, {task:task, completed:false}]);
      setTask("");//clear the input field after add button is clicked
    }
  }

  function handleToggleComplete(index){
    setTaskList((prevtasklist) => prevtasklist.map((task,i) => i===index ? {...task,completed:!task.completed} : task))
  }
  function handleDeleteTask(index){
    setTaskList((prevtasklist) => prevtasklist.filter((task,i) => i!==index));
  }

  return(
    <div className='main_cont'>
      <h2>To do List</h2>
      <div className='add_task_cont'>
        <input type='text' placeholder='Enter your Task' name='newTask' onChange={handleChange} value={task}></input>
        <button className='add_task_btn' onClick={handleClick}>Add</button>
      </div>

      {/* if no tasks are present it should show no tasks found else it should render all the tasks present in the taskList */}
      
      {taskList.length > 0 ? 
      (
        <TodoList taskList={taskList} handleToggleComplete={handleToggleComplete} handleDeleteTask={handleDeleteTask}/>
      )
      :(
        <div className='empty'>No Tasks Found!</div>
      )}
    </div>
  );
}
export default Task;