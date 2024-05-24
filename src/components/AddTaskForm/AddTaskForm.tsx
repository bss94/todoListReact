import React from 'react';

interface Props extends React.PropsWithChildren {
    value: string;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onBtnClick: React.FormEventHandler;
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
        <form className={'task-add'} onSubmit={onBtnClick}>
            <input type={'text'} className={'task-input'} value={value} onChange={onInputChange}/>
            {!edit ? <button type={'submit'} className={'task-btn'}>Add Task</button> :
                <div className={'btn-cont'}>
                    <button className={'edit-btn'} onClick={onEdit}>Edit</button>
                    <button type={'reset'} className={'task-btn'} onClick={onCancel}>Cancel</button>
                </div>
            }
        </form>
    );
};

export default AddTaskForm;