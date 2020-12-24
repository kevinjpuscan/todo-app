import * as types from '../types/taskTypes';
const initialState={
    tasks:[],
    filter:undefined,
    totalTaskVisible:0
}

export const taskReducer = (state=initialState,action)=>{
switch(action.type){
    case types.ADD_TASK:{
        return {...state,tasks:[...state.tasks,action.payload]};
    }
    case types.REMOVE_TASK:{
        let newTasks=state.tasks.filter(task=>task.id!==action.payload);
        return {...state,tasks:newTasks};
    }
    case types.UPDATE_TASK:{
        let newTasks=state.tasks.map(task=>{
            if(task.id===action.payload.id){
                return action.payload
            }
            return task;
        })
        return {...state,tasks:newTasks};
    }
    case types.REMOVE_COMPLETED_TASK:{
        let newTasks=state.tasks.filter(task=>!task.status);
        return {...state,tasks:newTasks};
    }
    case types.CHANGE_FILTER:{
        return {...state,filter:action.payload}
    }
    case types.CHANGE_TASKS_VISIBLE:{
        return {...state,totalTaskVisible:action.payload}
    }
    default:{
        return state;
    }
}

}