
import './App.css'
import ToDoInput from './components/ToDoInput/ToDoInput'
import React  from 'react';
import { useState } from 'react';

export type Ttask =  {
        id:number;
        taskText:string;
        completed:boolean;
    }

function App() {

  const [tasks, setTasks] =useState<Ttask[]> ([
    { id: 1, taskText: "Закончить проект", completed: false },
    { id: 2, taskText: "Купить продукты", completed: false },
    { id: 3, taskText: "Позвонить маме", completed: false },
]) 

  const [nextId,setNextId] =  useState(4);

const addTask = (text:string) =>{
    if(text.trim() === '') return;

    const newTask : Ttask = {
        id:nextId,
        taskText:text,
        completed:false,
    };
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
    console.log(tasks)
}

const onCompleted =(taskId: number) =>{
    setTasks(tasks.map(task =>
        task.id === taskId ?
        {...task, completed: !task.completed} :
        task
    ))
}


const onDeleteTask =(taskId:number) =>{
  setTasks(tasks.filter(task => task.id !== taskId));
}


  return (
    <>
      <ToDoInput onAddTask={addTask} tasks={tasks} onCompleted={onCompleted} onDelete={onDeleteTask} />
    </>
  )
}

export default App
