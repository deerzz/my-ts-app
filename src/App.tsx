import {InputField} from "./pages/components/InputField";
import {TodoItem} from "./pages/components/TodoItem";
import {useRecoilValue} from "recoil";
import {tasksState} from './atoms/tasksState'
import {Tabs} from "antd";
import {useMemo} from "react";

function App() {
    const tasks = useRecoilValue(tasksState)

    const taskTabItems = useMemo(() => ([
        {
            key: 'All',
            label: 'All',
            children: tasks.map(task => (
                <TodoItem key={task.id} task={task}/>
            ))
        },
        {
            key: 'Active',
            label: 'Active',
            children: tasks.filter(item => !item.completed).map(task => (
                <TodoItem key={task.id} task={task}/>
            ))
        },
        {
            key: 'Completed',
            label: 'Completed',
            children: tasks.filter(item => item.completed).map(task => (
                <TodoItem key={task.id} task={task}/>
            ))
        },
    ]), [tasks])

    return (
        <div>
            <h1>todos</h1>
            <InputField/>
            <Tabs items={taskTabItems}>
            </Tabs>
        </div>

    )
}

export default App
