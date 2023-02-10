import {useRecoilState} from "recoil";
import {tasksState} from './atoms/tasksState'
import {Route, Routes} from "react-router-dom";
import {AllTasks} from "./pages/AllTasks";
import {ActiveTasks} from "./pages/ActiveTasks";
import {CompletedTasks} from "./pages/CompletedTasks/inde";
import {TabFooter} from "./pages/components/TabFooter";
import React from "react";

'react-router-dom'

function App() {
    const [tasks, setTasks] = useRecoilState(tasksState)
    // const [currentTab, setCurrentTab] = useState(TabType.All)
    const activeCount = tasks.length;
    // const taskTabItems = [
    //     {
    //         key: TabType.All,
    //         label: 'All',
    //     },
    //     {
    //         key: TabType.Active,
    //         label: 'Active',
    //     },
    //     {
    //         key: TabType.Completed,
    //         label: 'Completed',
    //     },
    // ]


    const handleClearCompleted = () => {
        setTasks(tasks => tasks.filter(task => !task.completed))
    }

    return (
        // <div className={"px-24"}>
        //     <h1 className={"flex text-2xl justify-center mt-10"}>todos</h1>
        //     <InputField/>
        //     <div>
        //         <div>
        //             {tasks.filter(item => currentTab === TabType.All ? item : currentTab === TabType.Active ? !item.completed : item.completed).map(task => (
        //                 <TodoItem key={task.id} task={task}/>))}
        //         </div>
        //         <TabFooter currentTab={currentTab} onTabChange={handleTabClick} tabs={taskTabItems}
        //                    activeCount={activeTaskCount} onClearClick={handleClearCompleted}/>
        //     </div>
        // </div>
        <>
            <Routes>
                <Route path="/" element={<AllTasks tasks={tasks} handleClearCompleted={handleClearCompleted}/>}/>
                <Route path="/active"
                       element={<ActiveTasks tasks={tasks} handleClearCompleted={handleClearCompleted}/>}/>
                <Route path="/completed"
                       element={<CompletedTasks tasks={tasks} handleClearCompleted={handleClearCompleted}/>}/>
            </Routes>
            <TabFooter activeCount={activeCount} onClearClick={handleClearCompleted}/>
        </>
    )
}

export default App
