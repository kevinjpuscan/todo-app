import React from 'react';
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";


export default function TaskElement({task}){
    let taskStatus=task.status?'check':'uncheck';
    return (
        <div className={"task-element "+taskStatus} draggable="true">
        <div className="task-status pointer">
          <div className="task-status__icon" >
            <img src={check} alt="icon check"/>
             </div>
        </div>
        <div className="task-main">
          <span className="task-name">{task.name}</span>
        </div>
        
        <div className="task-delete pointer">
          <img  src={cross} alt="icon delete"/>
        </div>
      </div>
    );
}