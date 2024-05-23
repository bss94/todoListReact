import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import React, {useState} from 'react';
import Task from './components/Task/Task.tsx';

interface TaskList{
    task:string;
    id:string;
}
const App = () => {
    const [currentTask,setCurrentTask] = useState<string>('')
    const [taskList,setTaskList] = useState<TaskList[]>([
        {task:'create project',id:'ts1'},
        {task:'create components',id:'ts2'},
        {task:'create function',id:'ts3'}
    ])


    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(prevCurrentTask => {
            let newTask = prevCurrentTask;
            newTask = event.target.value;
            return newTask;
        })
    };
    const onHandleClick = () => {
        if(currentTask!==''){
            const newTask={
                task:currentTask,
                id:String(taskList.length+1)+'task'
            }
            const newTaskList = [...taskList,newTask]
            setTaskList(newTaskList);
            setCurrentTask('')
        }
    };
    return (
        <>
            <AddTaskForm value={currentTask} onBtnClick={onHandleClick} onInputChange={onHandleChange}/>
            <ol>
                {taskList.map((el)=>{
                    return <Task task={el.task} id={el.id} key={el.id} />
                })}
            </ol>

        </>
    );
};

export default App;
