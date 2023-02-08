import React, {useState} from "react";
import {Task} from "../../../type";
import {Checkbox, Divider, Input} from "antd";
import {useSetRecoilState} from "recoil";
import {tasksState} from "../../../atoms/tasksState";
import {CloseOutlined} from "@ant-design/icons";

export interface TodoItemProps {
    task: Task;
}

export const TodoItem: React.FC<TodoItemProps> = ({task}) => {
    const setTaskState = useSetRecoilState(tasksState);
    const [showDeleteBtn, setShowDeleteBtn] = useState(false)
    const [editToggle, setEditToggle] = useState(false)
    const [message, setMessage] = useState(task.content);

    const handleChange = (event: any) => {
        setMessage(event.target.value);
    };
    const deleteBtn = (
        <CloseOutlined className={'float-right align-middle text-gray-400 mt-1'} id={task.id}
                       onClick={() => onDelete(task)}/>
    )

    const onDelete = (task: Task) => {
        setTaskState(tasks => {
            return tasks.filter(item => item.id !== task.id)
        });
    }


    const onChange = (checkedValue: any) => {
        setTaskState(tasks => {
            return tasks.map(item => {
                if (item.id === checkedValue.target.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            });
        })
    }
    const onEdit = (value: any) => {
        setTaskState(tasks => {
            return tasks.map(item => {
                if (item.id === task.id) {
                    return {
                        ...item,
                        content: value?.target?.value || ''
                    }
                }
                return item;
            });
        });
        setEditToggle(false)
    }

    const handleBlur = (value: any) => {
        onEdit(value);
        setEditToggle(false)
    }
    const toggleInput = () => {
        setEditToggle(true)
    }

    return (editToggle ?
            <Input autoFocus value={message} onPressEnter={onEdit} onBlur={handleBlur} onChange={handleChange}/> :
            <div onMouseEnter={() => {
                setShowDeleteBtn(true);
            }}
                 onMouseLeave={() => {
                     setShowDeleteBtn(false);
                 }}
                 onDoubleClick={toggleInput}
            >
                <Checkbox className={'checkbox'} onChange={onChange} id={task.id} checked={task.completed}/>
                <label htmlFor={task.id}
                       className={task.completed ? "line-through text-gray-400" : ''}
                >{task.content}</label>
                {showDeleteBtn && deleteBtn}
                <Divider className={'divider'}></Divider>
            </div>
    );
}
