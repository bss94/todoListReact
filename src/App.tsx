import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import React, {useState} from 'react';
import Task from './components/Task/Task.tsx';

interface TaskList {
    task: string;
    id: string;
    completed:boolean
}

const App = () => {
    const [currentTask, setCurrentTask] = useState<string>('');
    const [editTaskId, seteditTaskId] = useState<string>('');
    const [editTask, setEditTask] = useState<boolean>(false);
    const [taskList, setTaskList] = useState<TaskList[]>([
        {task: 'create project', id: 'ts1' , completed:false},
        {task: 'create components', id: 'ts2', completed:true},
        {task: 'create function', id: 'ts3', completed:false}
    ]);


    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTask = event.target.value;
        setCurrentTask(newTask);
    };
    const onHandleClick = () => {
        if (currentTask !== '') {
            setTaskList((prevTaskList) => {
                const taskCopy = [...prevTaskList];
                const newTask = {
                    task: currentTask,
                    id: String(taskCopy.length + 1) + 'task',
                    completed:false
                };
                taskCopy.push(newTask);
                return taskCopy;
            });
            setCurrentTask('');
        }
    };

    const onHandleDelete = (id: string) => {
        setTaskList(prevTaskList => {
            return prevTaskList.filter((task) => task.id !== id);
        });
    };
    const onEditTask = (id: string) => {
        const task = taskList.filter((task) => task.id === id);
        seteditTaskId(task[0].id);
        setEditTask(true);
        setCurrentTask(task[0].task);
    };
    const onEdit = () => {
        if (currentTask !== '') {
            setTaskList(prevTaskList => {
                return prevTaskList.map((el) => {
                    if (el.id === editTaskId) {
                        return {...el, task: currentTask};
                    }
                    return el;
                });
            });
        }
        seteditTaskId('');
        setEditTask(false);
        setCurrentTask('');
    };

    return (
        <>
            <AddTaskForm value={currentTask}
                         onBtnClick={onHandleClick}
                         onInputChange={onHandleChange}
                         edit={editTask}
                         onEdit={onEdit}
            />
            <ol>
                {taskList.map((el) => {
                    return <Task task={el.task}
                                 id={el.id}
                                 completed={el.completed}
                                 onComplete={}
                                 onDeleteClick={() => onHandleDelete(el.id)}
                                 onEditTask={() => onEditTask(el.id)}
                                 key={el.id}
                    />;
                })}
            </ol>
        </>
    );
};

export default App;
