import React from 'react';

interface Props {
    task: string;
    id: string;
    onDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Task: React.FC<Props> = ({task, id, onDeleteClick}) => {
    return (
        <li id={id}>
            <input type={'checkbox'}/>
            <p>{task}</p>
            <button className={'delete-btn'} onClick={onDeleteClick}>Delete</button>
        </li>
    );
};

export default Task;