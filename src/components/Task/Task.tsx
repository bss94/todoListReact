import React from 'react';

interface Props {
    task: string;
    id: string;
    completed: boolean;
    onDeleteClick: React.MouseEventHandler;
    onEditTask: React.MouseEventHandler;
    onComplete:React.ChangeEventHandler;
}

const Task: React.FC<Props> = ({
                                   task,
                                   id,
                                   completed,
                                   onDeleteClick,
                                   onEditTask,
                                   onComplete
                               }) => {
    return (
        <li id={id}>
            <input type={'checkbox'} checked={completed} onChange={onComplete}/>
            <p>{task}</p>
            <button className={'delete-btn'} onClick={onDeleteClick}>Delete</button>
            <button className={'edit-btn'} onClick={onEditTask}>Edit</button>
        </li>
    );
};

export default Task;