import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import React, {useState} from 'react';
import Task from './components/Task/Task.tsx';

interface TaskList {
    task: string;
    id: string;
    completed: boolean;
}

const App = () => {
    const [currentTask, setCurrentTask] = useState<string>('');
    const [editTaskId, setEditTaskId] = useState<string>('');
    const [editTask, setEditTask] = useState<boolean>(false);
    const [taskList, setTaskList] = useState<TaskList[]>([
        {task: 'create project', id: '1task', completed: false},
        {task: 'create components', id: '2task', completed: true},
        {task: 'create function', id: '3task', completed: false}
    ]);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTask = event.target.value;
        setCurrentTask(newTask);
    };
    const onHandleClick = (event: React.FormEvent) => {
        event.preventDefault();
        if (currentTask !== '') {
            setTaskList((prevTaskList) => {
                const taskCopy = [...prevTaskList];
                const newTask = {
                    task: currentTask,
                    id: String(Math.floor(Math.random() * 100)) + 'task' + String(Math.floor(Math.random() * 100)),
                    completed: false
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
        setEditTaskId(task[0].id);
        setEditTask(!editTask);
        setCurrentTask(task[0].task);
    };
    const onEdit = () => {
        if (currentTask !== '') {
            setTaskList(prevTaskList => {
                return prevTaskList.map((el): TaskList => {
                    if (el.id === editTaskId) {
                        return {...el, task: currentTask};
                    }
                    return el;
                });
            });
            setEditTaskId('');
            setEditTask(!editTask);
            setCurrentTask('');
        } else {
            alert('You cant do empty task, if you wanna delete task: click cancel and click delete on task to delete');
        }

    };
    const onCancelHandler = () => {
        setEditTaskId('');
        setEditTask(!editTask);
        setCurrentTask('');
    };
    const onCompleteTask = (id: string) => {
        setTaskList(prevTaskList => {
            return prevTaskList.map((el) => {
                if (el.id === id) {
                    return {...el, completed: !el.completed};
                }
                return el;
            });
        });
    };

    return (
        <>
            <h3> To Do List App</h3>
            <AddTaskForm value={currentTask}
                         onBtnClick={onHandleClick}
                         onInputChange={onHandleChange}
                         edit={editTask}
                         onEdit={onEdit}
                         onCancel={onCancelHandler}
            />
            {taskList.length > 0 ? (editTask ? <h4>Edit your task(task id: {editTaskId})</h4> :
                taskList.map((el) => {
                    return <Task task={el.task}
                                 id={el.id}
                                 completed={el.completed}
                                 onComplete={() => onCompleteTask(el.id)}
                                 onDeleteClick={() => onHandleDelete(el.id)}
                                 onEditTask={() => onEditTask(el.id)}
                                 key={el.id}
                    />;
                })) : <h4>Task list empty, enter new task</h4>}

        </>
    );
};

export default App;
