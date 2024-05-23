import React from 'react';

interface Props extends React.PropsWithChildren{
    value:string;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onBtnClick: React.MouseEventHandler;
}
const AddTaskForm:React.FC<Props> = ({value,onInputChange, onBtnClick}) => {
    return (
        <div>
            <input type={'text'} className={'task-input'} value={value} onChange={onInputChange}/>
            <input type={'button'} onClick={onBtnClick} value={'Add Task'}/>
        </div>
    );
};

export default AddTaskForm;