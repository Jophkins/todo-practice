import {useState} from "react";

import styles from "./Todo.module.scss";

import TasksCounter from "./TasksCounter";
import TasksAddForm from "./TasksAddForm";
import Tasks from "./Tasks";

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'juliano',
      isDone: true
    },
    {
      id: 2,
      text: 'mimimichaela',
      isDone: false
    }
  ]);

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        text: userInput,
        complete: false
      };
      setTasks([...tasks, newTask]);
    }
  }

  return (
    <div className={styles.todo}>
      <TasksCounter tasks={tasks} />
      <TasksAddForm addTask={addTask} />
      {tasks.map(task => {
        return(
          <Tasks key={task.id} task={task} />
        )
      })}
    </div>
  )
}

export default Todo;
