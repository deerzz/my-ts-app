import React from "react";
import {Task} from "../../../type";
import {Checkbox, Divider} from "antd";
import {useSetRecoilState} from "recoil";
import {tasksState} from "../../../atoms/tasksState";

export interface TodoItemProps {
    task: Task;
}

export const TodoItem: React.FC<TodoItemProps> = ({task}) => {
    const setTaskState = useSetRecoilState(tasksState);
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

    return (<div>
            <Checkbox className={'checkbox'} onChange={onChange} id={task.id} checked={task.completed}/>
            <label htmlFor={task.id} className={task.completed ? 'completedTask' : ''}>{task.content}</label>
            <Divider className={'divider'}></Divider>
        </div>
    );
}
