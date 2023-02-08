import {Divider, Input} from "antd";
import React, {useState} from "react";
import {useSetRecoilState} from "recoil";
import {tasksState} from "../../../atoms/tasksState";
import {nanoid} from "nanoid";
import {Task} from "../../../type";
import {DownOutlined} from '@ant-design/icons';

interface InputFieldProps {

}

export const InputField = (props: InputFieldProps) => {
    const [inputKey, setInputKey] = useState(0);
    const setTaskState = useSetRecoilState(tasksState);

    const handleClick = () => {
        setTaskState(tasks => {
            const activeTask = tasks.find(item => item.completed === false)
            return tasks.map(item => {
                return {...item, completed: !!activeTask}
            })
        })
    }

    const selectAllBtn = (
        <DownOutlined onClick={handleClick}/>
    )

    const handlePressEnter = (value: any) => {
        setTaskState(tasks => {
            const newTask: Task = {id: nanoid(), completed: false, content: value?.target?.value || ''}
            return [...tasks, newTask]
        })
        setInputKey(v => v + 1)
    }

    return (
        <div>
            <Input autoFocus key={inputKey} prefix={selectAllBtn} placeholder="What needs to be done" bordered={false}
                   onPressEnter={handlePressEnter}/>
            <Divider className={'divider'}></Divider>
        </div>
    )
}
