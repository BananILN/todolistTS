import React from "react";
import Button from "../Button/Button";
import List from "../List/List";

export default function ToDoInput(){

    const onSaveData = () =>{

    }

    return (
        <div className="main"> 
            <h1>Список дел </h1>

            <input className="input-add-task"/>
            <Button buttonText={"Добавить"} onClick={onSaveData}/>
            <List />
        </div>
    ) 
}