import React from 'react';

interface Props extends React.PropsWithChildren {
    value: string;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onBtnClick: React.MouseEventHandler;
    edit: boolean;
    onEdit: React.MouseEventHandler;
    onCancel: React.MouseEventHandler;
}

const AddTaskForm: React.FC<Props> = ({
                                          value,
                                          onInputChange,
                                          onBtnClick,
                                          edit,
                                          onEdit,
                                          onCancel
                                      }) => {
    return (
        <div className={'task-add'}>
            <input type={'text'} className={'task-input'} value={value} onChange={onInputChange}/>
            {!edit ? <button className={'task-btn'} onClick={onBtnClick}>Add Task</button> :
                <div className={'btn-cont'}>
                    <button className={'edit-btn'} onClick={onEdit}>Edit</button>
                    <button className={'task-btn'} onClick={onCancel}>Cancel</button>
                </div>
            }
        </div>
    );
};

export default AddTaskForm;