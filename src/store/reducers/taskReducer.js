import * as types from '../types/taskTypes';
const initialState={
    tasks:[
        {name:"leer 1 hora",status:true},
        {name:"leer 1 hora",status:false},
        {name:"leer 1 hora",status:true},
        {name:"leer 1 hora",status:false},
        {name:"leer 1 hora",status:false},
    ]
}

export const taskReducer = (state=initialState,action)=>{
switch(action.type){
    case types.ADD_TASK:{
        return {...state,tasks:[...state.tasks,action.payload]};
    }
    default:{
        return state;
    }
}

}