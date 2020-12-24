import React from 'react';
import TaskActions from './TaskActions';
import TaskElement from './TaskElement';
import Wrapeer from './Wrapper';

function ListTask(){
    let tasks=[
      {name:"leer 1 hora",status:true},
      {name:"leer 1 hora",status:false},
      {name:"leer 1 hora",status:true},
      {name:"leer 1 hora",status:false},
      {name:"leer 1 hora",status:false},
    ]

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

  export default ListTask;