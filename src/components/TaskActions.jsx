import React from 'react';
import {connect} from 'react-redux';
import * as taskAction from '../store/types/taskTypes';

function TaskActions({handleRemoveCompleted,totalTaskVisible}){
    return(<div className="task-element">
    <div id="option-five-items" className="task-detail pointer">{totalTaskVisible} Items</div>
    <div className="task-detail pointer" onClick={handleRemoveCompleted}>clear Completed</div>
  </div>)
}

const mapStateToProps=state=>{
  return {
    totalTaskVisible:state.taskReducer.totalTaskVisible
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    handleRemoveCompleted:()=>dispatch({type:taskAction.REMOVE_COMPLETED_TASK})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskActions);
