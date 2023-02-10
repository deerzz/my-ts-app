import {InputField} from "../components/InputField";
import {Task} from "../../type";
import {TodoItem} from "../components/TodoItem";
import React from "react";


export interface AllTasksProps {
    tasks: Task[];
    handleClearCompleted: () => void
}

export const AllTasks: React.FC<AllTasksProps> = ({tasks, handleClearCompleted}) => {


    return (
        <div className={"px-24"}>
            <h1 className={"flex text-2xl justify-center mt-10"}>todos</h1>
            <InputField/>
            <div>
                {tasks.map(task => (
                    <TodoItem key={task.id} task={task}/>))}
            </div>
            {/*<TabFooter onClearClick={handleClearCompleted}/>*/}
        </div>
    )
}
