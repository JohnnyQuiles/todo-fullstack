import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';


function CreateTasks() {
    const [todo, setTodo] = useState("");

    return (
        <div className="create-tasks-page">
            <NavBar />
            <h1>Create-Tasks Page</h1>
            <div className='task-table'>
                <input type="text" value={todo} placeholder='create task' onChange={(event) => {
                    setTodo(event.target.value);
                    console.log("typing");
                }} />
                <button onClick={async () => {
                    console.log(todo);
                }}>Create-tasks</button>
                <Outlet />
            </div>
        </div>
    )
}
export default CreateTasks;