import IdGenerator from '../../services/IdGenerator';
import * as types from '../types/taskTypes';
let idGenerador=new IdGenerator();
const initialState={
    tasks:[
        {id: idGenerador.generate(),name:"leer 1 hora",status:true},
        {id: idGenerador.generate(),name:"leer 1 hora",status:false},
        {id: idGenerador.generate(),name:"leer 1 hora",status:true},
        {id: idGenerador.generate(),name:"leer 1 hora",status:false},
        {id: idGenerador.generate(),name:"leer 1 hora",status:false},
    ]
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
    default:{
        return state;
    }
}

}