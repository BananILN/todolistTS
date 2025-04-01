import React, { useState } from "react";
import Button from "../Button/Button";
import List from "../List/List";
import { Ttask } from "../../App";

type TTodoInputProps = {
    onAddTask: (text:string) => void;
    tasks: Ttask[];
    onCompleted: (taskId:number) => void;
    onDelete: (taskId:number) => void;
}

export default function ToDoInput({onAddTask, tasks, onCompleted, onDelete}:TTodoInputProps) {

    const [inputValue,setInputValue] = useState('');

    const handleOnTask = () =>{
        onAddTask(inputValue);
        setInputValue('');
    }

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.target.value);
    }

    const onKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) =>{
       if(event.key === "Enter"){
        handleOnTask();
       }
    }

    return (
        <div className="main"> 
        <h1>Список дел</h1>
        <div className="input-container">
          <input 
            className="input-add-task"
            value={inputValue}
            onChange={onChangeValue}
            onKeyDown={onKeyPress}
          />
          <Button buttonText="Добавить" onClick={handleOnTask} />
        </div>
        <List 
          tasks={tasks} 
          onCompleted={onCompleted} 
          onDelete={onDelete} 
        />
      </div>
    ) 
}