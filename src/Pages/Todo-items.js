import React from 'react';

const taskItem =({ id, title, completed }) => {
    return (
        <li className={`task-group-item ${completed && 'task-group-success'}`}>
        <div>
            <input type="checkbox" checked={completed}></input>
            {title}
        </div>
        </li>
    )
};
export default taskItem; 