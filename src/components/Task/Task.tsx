import React from 'react';

interface Props {
    task:string;
    id:string;
}

const Task :React.FC<Props> = ({task, id}) => {
    return (
        <li id={id}>
           <input type={'checkbox'}/><p>{task}</p> <button>delete</button>
        </li>
    );
};

export default Task;