import React from 'react';

interface Props extends React.PropsWithChildren {
    value: string;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onBtnClick: React.MouseEventHandler;
}

const AddTaskForm: React.FC<Props> = ({
                                          value,
                                          onInputChange,
                                          onBtnClick,

                                      }) => {
    return (
        <div className={'task-add'}>
            <input type={'text'} className={'task-input'} value={value} onChange={onInputChange}/>
             <button className={'task-btn'} onClick={onBtnClick}>Add Task</button>
        </div>
    );
};

export default AddTaskForm;