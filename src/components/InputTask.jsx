import React,{useState} from 'react';
import Wrapper from './Wrapper';

import {connect} from 'react-redux';
import * as taskTypes from '../store/types/taskTypes';
import IdGenerator from '../services/IdGenerator';

let idGenerador=new IdGenerator();

function InputTask({handleAddTask}){
    let [inputName,setInputName]=useState('');

    function handleChange(event){
        setInputName(event.target.value);
    }

    function saveTask(){
      if(inputName!==""){
        let task={id:idGenerador.generate(),name:inputName,status:false}
        handleAddTask(task);
        setInputName('');
      }
    }

    const handleKeyDown = event => {
        if (event.key === "Enter") {
          saveTask();
        }
      };

 
    return(
        <Wrapper>
        <div className="form-container">
          <div className="task-status" onClick={saveTask}>
            <div className="task-uncheck" ></div>
          </div>
            <form onSubmit={event=>{event.preventDefault()}}>
              <input type="text" id="task-input" placeholder="Create a new todo..." 
              value={inputName} onChange={handleChange}
              onKeyDown={handleKeyDown}/>
            </form>
        </div>
      </Wrapper>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      handleAddTask: (task) =>
        dispatch({ type: taskTypes.ADD_TASK, payload: task })
    };
  };
export default connect(null,mapDispatchToProps)(InputTask);