import React from 'react';
import TaskActions from './TaskActions';
import TaskElement from './TaskElement';
import Wrapeer from './Wrapper';
import { connect } from "react-redux";
import FilterTasks from '../services/filterTasks';

let filterTask=new FilterTasks();

function ListTask({tasks,filter}){

   
    return(
        <Wrapeer>
            <div className="main__list-task">
            {
                filterTask.filter(tasks,filter).map((task,idx)=>(
                    <TaskElement key={idx} task={task}/>
                ))
            }
            <TaskActions/>            
          </div>
        </Wrapeer>

    );
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks,
    filter:state.taskReducer.filter
  };
};

  export default connect(mapStateToProps)(ListTask);