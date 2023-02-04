import React from "react";
import {Task} from "../../../type";

export interface TodoItemProps {
    task: Task;
}

export const TodoItem: React.FC<TodoItemProps> = ({task}) => {
    return <div>
        <input type={"checkbox"} id={task.id}/>
        <label htmlFor={task.id}>{task.content}</label>
    </div>;
}
