import React from 'react';

interface Props {
    task: string;
    id: string;
    completed: boolean;
    onDeleteClick: React.MouseEventHandler;
    onEditTask: React.MouseEventHandler;
    onComplete: React.ChangeEventHandler;
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
        <div className={'task-item'} id={id}>
            <input type={'checkbox'} className={'task-check'} checked={completed} onChange={onComplete}/>
            <div className={'item-text-cont'}>
                <p className={'item-text'}>{task}</p>
            </div>

            {!completed ?
                <div className={'btn-cont'}>
                    <button className={'edit-btn'} onClick={onEditTask}>Edit</button>
                    <button className={'delete-btn'} onClick={onDeleteClick}>Delete</button>
                </div>
                : <div className={'btn-cont'}>
                    <button className={'delete-btn'} onClick={onDeleteClick}>Delete</button>
                </div>
            }
        </div>
    );
};

export default Task;