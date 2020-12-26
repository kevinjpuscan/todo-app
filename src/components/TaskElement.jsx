import React from 'react';
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import {connect} from 'react-redux';
import * as taskTypes from '../store/types/taskTypes';


function TaskElement({task,handleRemoveTask,handleUpdateTask,handleReorderTasks}){
    let taskStatus=task.status?'check':'uncheck';

    function handleClickUpdate(){
      let newTask={...task};
      newTask.status=!newTask.status;
      handleUpdateTask(newTask);
    }
    function handleClickRemove(){
      handleRemoveTask(task.id);
    }

    function allowDrop(ev) {
      ev.preventDefault();
    }
    
    function drag(ev) {
      ev.dataTransfer.setData("taskId", ev.target.id);
    }
    
    function drop(ev) {
      ev.preventDefault();
      let idTaskOrigin=ev.dataTransfer.getData("taskId");
      handleReorderTasks(idTaskOrigin,task.id);
      
    }
    return (
        <div id={task.id} className={"task-element "+taskStatus} draggable="true" onDragStart={drag} onDrop={drop} onDragOver={allowDrop}>
        <div className="task-status pointer" onClick={handleClickUpdate}>
          <div className="task-status__icon" >
            <img src={check} alt="icon check"/>
             </div>
        </div>
        <div className="task-main">
          <span className="task-name">{task.name}</span>
        </div>
        
        <div className="task-delete pointer" onClick={handleClickRemove}>
          <img  src={cross} alt="icon delete"/>
        </div>
      </div>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    handleRemoveTask: (id) =>
      dispatch({ type: taskTypes.REMOVE_TASK, payload: id }),
    handleUpdateTask: (task) =>
      dispatch({ type: taskTypes.UPDATE_TASK, payload: task }),
    handleReorderTasks:(idTaskOrigin,idTaskDestiny)=>
      dispatch({type:taskTypes.REORDER_TASK,payload:{idTaskOrigin,idTaskDestiny}})
  };
};

export default connect(null,mapDispatchToProps)(TaskElement);