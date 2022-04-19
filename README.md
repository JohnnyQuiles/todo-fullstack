# TODO FULL STACK 

Stage 1 (React, React-Router, Redux)
    - Implement the below requirements using React, Redux, and React Router:

    Create the following using React-Router to render different pages and using Redux to store the ToDo's globally
1. Navigation bar (React-Router)
	- Home , Create Task

2. Home Page (React-Router)

	2.1 Display a list of tasks
	2.2 Display task statistics
                a. Number of tasks Completed, Incompleted, Total
                b. Number of tasks in different priorities
                c. Completed task percentage
	2.3 Sort tasks by 
                a. completed
                b. priority
	2.4 Filter tasks by 
                a. completed
                b. priority
	2.5 Use url search params to implement url sharing functionality

3. Task Page (React-Router)
            Create a new task

4. A Task should have the following functionality
	4.1 Save task created date
        4.2 Set task priority 
		a. Critical
            	b. High
            	c. Medium
            	d. Low
        4.3 Update task description
        4.4 Update task title
        4.5 Mark task as completed
        4.6 Save task completed date
        4.7 Delete task 
————————————————————————————————————————

Stage 2 (Express, Mongo)
    - Create a new Express server and mongo database
    - Add express routes and async Redux actions to persist all the user data in the database