import React from 'react';
import {connect} from 'react-redux';
import * as taskAction from '../store/types/taskTypes';

function TaskActions({handleRemoveCompleted}){
    return(<div className="task-element">
    <div id="option-five-items" className="task-detail pointer">5 Items</div>
    <div className="task-detail pointer" onClick={handleRemoveCompleted}>clear Completed</div>
  </div>)
}

const mapDispatchToProps=(dispatch)=>{
  return{
    handleRemoveCompleted:()=>dispatch({type:taskAction.REMOVE_COMPLETED_TASK})
  }
}

export default connect(null,mapDispatchToProps)(TaskActions);
