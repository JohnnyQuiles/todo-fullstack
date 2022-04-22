import React from 'react';
import { useSelector } from 'react-redux';

const selectTasks = state => state.tasks;

const TaskList = () => {
    const tasks = useSelector(selectTasks)

    const renderList = tasks.map(task => {
        return <TaskListItem key={task.id} task={task} />
    });
    return <ul className="task-list">{renderList}</ul>;

};
export default TaskList;