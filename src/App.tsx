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
        const newTask = event.target.value;

        setCurrentTask(newTask);
    };
    const onHandleClick = () => {
        if(currentTask!==''){
            setTaskList((prevTaskList) => {
                const taskCopy = [...prevTaskList];
                const newTask={
                    task:currentTask,
                    id:String(taskCopy.length+1)+'task'
                }
                taskCopy.push(newTask)
                return taskCopy;
            });
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
