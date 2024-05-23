import React from 'react';

interface Props extends React.PropsWithChildren {
    value: string;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onBtnClick: React.MouseEventHandler;
    edit: boolean;
    onEdit: React.MouseEventHandler;
}

const AddTaskForm: React.FC<Props> = ({
                                          value,
                                          onInputChange,
                                          onBtnClick,
                                          edit,
                                          onEdit
                                      }) => {
    return (
        <div className={'task-add'}>
            <input type={'text'} className={'task-input'} value={value} onChange={onInputChange}/>
            {!edit ? <button className={'task-btn'} onClick={onBtnClick}>Add Task</button> :
                <button className={'task-btn'} onClick={onEdit}>Edit</button>}
        </div>
    );
};

export default AddTaskForm;