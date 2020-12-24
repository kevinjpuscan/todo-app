import React from 'react';
import TaskActions from './TaskActions';
import TaskElement from './TaskElement';
import Wrapeer from './Wrapper';
import { connect } from "react-redux";
import FilterTasks from '../services/filterTasks';
import * as taskTypes from '../store/types/taskTypes'; 

let filterTask=new FilterTasks();

function ListTask({tasks,filter,handleChangeTotalTaskVisible}){
  
  let tasksVisible=filterTask.filter(tasks,filter);
  handleChangeTotalTaskVisible(tasksVisible.length);

    return(
        <Wrapeer>
          {
            tasksVisible.length>0?(

            <div className="main__list-task">
            {
                tasksVisible.map((task,idx)=>(
                    <TaskElement key={idx} task={task}/>
                ))
            }
            <TaskActions/>            
          </div>
            ):
            <div className="tasks-empty">
              Add new Task
            </div>
          }
        </Wrapeer>

    );
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks,
    filter:state.taskReducer.filter
  };
};

const mapDispatchToProps = dispatch=>{
  return {
    handleChangeTotalTaskVisible:(totalTaskVisible)=>dispatch({type:taskTypes.CHANGE_TASKS_VISIBLE,payload:totalTaskVisible})
  }
}

  export default connect(mapStateToProps,mapDispatchToProps)(ListTask);