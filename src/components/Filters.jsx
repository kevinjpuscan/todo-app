import React from 'react';
import Wrapeer from './Wrapper';
import {connect} from 'react-redux';
import * as taskTypes from '../store/types/taskTypes';

function Filters({filter,handleFilterActive,handleFilterAll,handleFilterCompleted}){
   
    
    return(
        <Wrapeer>
            <div className="filters">
                <div className={`filter-element pointer ${filter===undefined?"active":""}`} onClick={handleFilterAll}>All</div>
                <div className={`filter-element pointer ${filter===false?"active":""}`}  onClick={handleFilterActive}>Active</div>
                <div className={`filter-element pointer ${filter===true?"active":""}`} onClick={handleFilterCompleted}>Completed</div>
            </div>
        </Wrapeer>
    )
}

const mapStateToProps=(state)=>{
    return{ 
        filter:state.taskReducer.filter
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleFilterAll:()=>dispatch({type:taskTypes.CHANGE_FILTER,payload:undefined}),
        handleFilterCompleted:()=>dispatch({type:taskTypes.CHANGE_FILTER,payload:true}),
        handleFilterActive:()=>dispatch({type:taskTypes.CHANGE_FILTER,payload:false}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filters);