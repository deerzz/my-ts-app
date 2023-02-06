import {InputField} from "./pages/components/InputField";
import {TodoItem} from "./pages/components/TodoItem";
import {useRecoilState} from "recoil";
import {tasksState} from './atoms/tasksState'
import {useState} from "react";
import {TabType} from "./type";
import {TabFooter} from "./pages/components/TabFooter";

function App() {
    const [tasks, setTasks] = useRecoilState(tasksState)
    const [currentTab, setCurrentTab] = useState(TabType.All)

    const taskTabItems = [
        {
            key: TabType.All,
            label: 'All',
        },
        {
            key: TabType.Active,
            label: 'Active',
        },
        {
            key: TabType.Completed,
            label: 'Completed',
        },
    ]

    const activeTaskCount = tasks.filter(task => !task.completed).length;

    const handleTabClick = (key: TabType) => {
        setCurrentTab(key);
    }

    const handleClearCompleted = () => {
        setTasks(tasks => tasks.filter(task => !task.completed))
    }

    return (
        <div className={"px-24"}>
            <h1 className={"text-2xl"}>todos</h1>
            <InputField/>
            <div>
                <div>
                    {tasks.filter(item => currentTab === TabType.All ? item : currentTab === TabType.Active ? !item.completed : item.completed).map(task => (
                        <TodoItem key={task.id} task={task}/>))}
                </div>
                <TabFooter currentTab={currentTab} onTabChange={handleTabClick} tabs={taskTabItems}
                           activeCount={activeTaskCount} onClearClick={handleClearCompleted}/>
            </div>
        </div>

    )
}

export default App
