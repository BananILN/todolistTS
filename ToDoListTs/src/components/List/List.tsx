import React, { useState } from "react";

type Ttask =  {
        id:number;
        taskText:string;
        completed:boolean;
    }

export default function List(){

    const [completed, IsCompelted] = useState(false);

    const [tasks, setTasks] =useState<Ttask[]> ([
        { id: 1, taskText: "Закончить проект", completed: false },
        { id: 2, taskText: "Купить продукты", completed: false },
        { id: 3, taskText: "Позвонить маме", completed: false },
    ]) 
       
    

    const onCompleted = (taskId:number) =>{
        setTasks(tasks.map(task =>
            task.id === taskId
            ? {...task, completed: !task.completed}
            : task
        ))
    }
    const onDelete = (taskId:number) =>{
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return(
        <div className="container-task">
            {tasks.map((task)=>(
            <div key={task.id} className="task">
            <div className="task-content">
                <input 
                className="input-task" 
                type="checkbox" 
                checked={task.completed}
                onChange={() => onCompleted(task.id)}
                />

                <span style={{ 
                    textDecoration: task.completed ? 'line-through' : 'none',
                    opacity: task.completed ? 0.7 : 1
                }}>
                {task.taskText}
                </span>
            </div>
            <button className="delete-button" onClick={()=> onDelete(task.id)}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M19 5L5 19M5.00001 5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            </div>
            ))}


        </div>
    )

}