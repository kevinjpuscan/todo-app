import React from 'react';
import TaskActions from './TaskActions';
import TaskElement from './TaskElement';
import Wrapeer from './Wrapper';
import { connect } from "react-redux";

function ListTask({tasks}){

    return(
        <Wrapeer>
            <div className="main__list-task">
            {
                tasks.map((task,idx)=>(
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
    tasks: state.taskReducer.tasks
  };
};

  export default connect(mapStateToProps)(ListTask);