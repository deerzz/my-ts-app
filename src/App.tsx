import {useState} from 'react'
import './App.css'
import {TodoItem} from "./TodoItem";
import {Divider, Input} from "antd";

function App() {
    const [tasks, setTasks] = useState([{id: '1', name: 'clean', completed: true}, {
        id: '2',
        name: 'sleep',
        completed: true
    }])

    return (
        <>
            <h1>todos</h1>
            <Input placeholder="What needs to be done" bordered={false}></Input>
            <Divider className={'divider'}></Divider>
            <div>
                {tasks.map(task => (
                    <TodoItem key={task.id} task={task}/>
                ))}
            </div>
        </>
    )
}

export default App
