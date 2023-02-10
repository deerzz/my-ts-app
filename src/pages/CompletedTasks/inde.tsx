import {InputField} from "../components/InputField";
import {Task} from "../../type";
import {TodoItem} from "../components/TodoItem";
import React from "react";


export interface CompletedTasksProps {
    tasks: Task[];
    handleClearCompleted: () => void
}

export const CompletedTasks: React.FC<CompletedTasksProps> = ({tasks, handleClearCompleted}) => {
    console.log('===========', tasks)
    return (
        <div className={"px-24"}>
            <h1 className={"flex text-2xl justify-center mt-10"}>todos</h1>
            <InputField/>
            <div>
                {tasks.filter(task => task.completed).map(task => (
                    <TodoItem key={task.id} task={task}/>))}
                {/*<TabFooter currentTab={currentTab} onTabChange={handleTabClick} tabs={taskTabItems}*/}
                {/*           activeCount={activeTaskCount} onClearClick={handleClearCompleted}/>*/}
                {/*<TabFooter onClearClick={handleClearCompleted}/>*/}
            </div>
        </div>
    )
}
