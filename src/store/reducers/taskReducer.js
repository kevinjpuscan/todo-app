import IdGenerator from '../../services/IdGenerator';
import * as types from '../types/taskTypes';
let idGenerator=new IdGenerator();
const initialState={
    tasks:[{id:idGenerator.generate(),name:"Complete online javascript course",status:true},
        {id:idGenerator.generate(),name:"Jog around the park 3x",status:false},
        {id:idGenerator.generate(),name:"10 minutes meditation",status:false},
        {id:idGenerator.generate(),name:"Read for 1 hour",status:false},
        {id:idGenerator.generate(),name:"Pick up groceries",status:false},
        {id:idGenerator.generate(),name:"Complete Todo App on Frontend Mentor",status:false}],
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
    case types.REORDER_TASK:{
        
        let taskOrigin=state.tasks.find(task=>task.id===action.payload.idTaskOrigin);
        let indexTaskOrigin=state.tasks.findIndex(task=>task.id===action.payload.idTaskOrigin);
        let newTasks=[...state.tasks];
        newTasks.splice(indexTaskOrigin,1);
        
        let indexTaskDestiny=newTasks.findIndex(task=>task.id===action.payload.idTaskDestiny);

        newTasks.splice(indexTaskDestiny,0,taskOrigin);

        return {...state,tasks:newTasks}
    }
    default:{
        return state;
    }
}

}