import {Divider, Input} from "antd";
import React, {useState} from "react";
import {useSetRecoilState} from "recoil";
import {tasksState} from "../../../atoms/tasksState";
import {nanoid} from "nanoid";
import {Task} from "../../../type";

interface InputFieldProps {

}

export const InputField = (props: InputFieldProps) => {
    const [inputKey, setInputKey] = useState(0);

    const setTaskState = useSetRecoilState(tasksState);

    const handlePressEnter = (value: any) => {
        setTaskState(tasks => {
            const newTask: Task = {id: nanoid(), completed: false, content: value?.target?.value || ''}
            return [...tasks, newTask]
        })
        setInputKey(v => v + 1)
    }

    return (
        <div>
            <Input key={inputKey} placeholder="What needs to be done" bordered={false} onPressEnter={handlePressEnter}/>
            <Divider className={'divider'}></Divider>
        </div>
    )
}
