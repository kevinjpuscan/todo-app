export default class FilterTasks{
    filter(tasks,status){
        if(status===undefined){
            return tasks;
        }   
        return tasks.filter(task=>task.status===status);
    }
}