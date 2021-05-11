import { useState } from 'react';

const tasksData = [
  {
    id: 1,
    name: 'Task #1',
    description: 'Lorem ipsum dolor sit amet',
    dueDate: 'May 21',
    assignee: 'Raf Lorenz',
    list: 'Current Sprint'
  },
  {
    id: 2,
    name: 'Task #2',
    description: 'Lorem ipsum dolor sit amet',
    dueDate: 'May 21',
    assignee: 'Raf Lorenz',
    list: 'In Progress'
  },
  {
    id: 3,
    name: 'Task #3',
    description: 'Lorem ipsum dolor sit amet',
    dueDate: 'May 21',
    assignee: 'Raf Lorenz',
    list: 'QA'
  },
  {
    id: 4,
    name: 'Task #4',
    description: 'Lorem ipsum dolor sit amet',
    dueDate: 'May 21',
    assignee: 'Raf Lorenz',
    list: 'Resolved'
  },
  {
    id: 5,
    name: 'Task #5',
    description: 'Lorem ipsum dolor sit amet',
    dueDate: 'May 21',
    assignee: 'Raf Lorenz',
    list: 'Completed'
  }
];

let latestID = 5;

function App() {
  return (
    <div className="app">
      <h1>Project Name</h1>
      <div className="task-list-wrapper">
        <TaskList taskList="Current Sprint" />
        <TaskList taskList="In Progress" />
        <TaskList taskList="QA" />
        <TaskList taskList="Resolved" />
        <TaskList taskList="Completed" />
      </div>
    </div>
  );
}

function TaskList({ taskList }) {
  const [tasks, setTasks] = useState(tasksData);

  const addTask = () => {
    latestID++;
    setTasks([
      ...tasks,
      {
        id: latestID,
        name: `Task #${latestID}`,
        description: 'Lorem ipsum dolor sit amet',
        dueDate: 'May 21',
        assignee: 'Raf Lorenz',
        list: taskList
      }
    ]);
  };

  return (
    <div className="task-list">
      <h3>{taskList}</h3>
      {tasks.map(task => task.list === taskList && <TasktItem key={task.id} {...task} />)}
      <button onClick={() => addTask()}>Add a task</button>
    </div>
  );
}

function TasktItem({ name, description, dueDate, assignee }) {
  return (
    <div className="task-list-item">
      <p>Task name: {name}</p>
      <p>Task description: {description}</p>
      <p>Task due date: {dueDate}</p>
      <p>Task assignee: {assignee}</p>
    </div>
  );
}

export default App;
