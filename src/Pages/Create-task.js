import React, { useState } from 'react';
import NavBar from '../Components/NavBar';

function CreateTasks() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [completed, setCompleted] = useState('');

    return (
        <div className="create-tasks-page">
            <NavBar />
            <h1>Create-Tasks</h1>
            <div className='task'>
                <label>Title:</label>
                <input type="text" name="title" placeholder='title' value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <div className='description'>
                    <label>Description:</label>
                    <input type='text' name='description' value={description} onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                </div>
                <div className='priority'>
                    <label>Priority:</label>
                    <select value={priority} onChange={(e) => {
                        setPriority(e.target.value);
                    }}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div>
                <div className="complete">
                    <label>Complete</label>
                    <input type="checkbox" name="complete" value={completed} onChange={(e) => {
                        setCompleted(e.target.value);
                    }} />
                </div>
                <button onClick={async () => {

                    console.log("submit")
                }}>Create-tasks</button>
            </div>
        </div>
    )
}
export default CreateTasks;