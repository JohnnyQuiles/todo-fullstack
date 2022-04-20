import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';


function CreateTasks() {
    return (
        <div className="create-tasks-page">
            <NavBar />
            <h1>Create-Tasks</h1>
            <div className='task'>
                <label>Title:</label>
                <input type="text" placeholder='create task' onChange={() => {
                    console.log("typing");
                }} />
                <div className='description'>
                    <label>Description:</label>
                    <input type='text'></input>
                </div>
                <div className='priority'>
                    <label>Priority:</label>
                    <select>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div>
                <div className="complete">
                    <label>Complete</label>
                    <input type="checkbox" name="" />
                </div>
                <button onClick={async () => {
                }}>Create-tasks</button>
                <Outlet />
            </div>
        </div>
    )
}
export default CreateTasks;