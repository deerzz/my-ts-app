import React from "react";

export interface TodoItemProps {
    task: {
        name: string;
        id: string;
        completed: boolean
    }
}

export const TodoItem: React.FC<TodoItemProps> = ({task}) => {
    return <div>
        <input type={"checkbox"} id={task.id}/>
        <label htmlFor={task.id}>{task.name}</label>
    </div>;
}
