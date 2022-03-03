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
        isDone: false
      };
      setTasks([...tasks, newTask]);
    }
  }

  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  }

  const isDoneToggle = (id) => {
    setTasks([
      ...tasks.map((task) => {
        return task.id === id ? { ...task, isDone: !task.isDone } : { ...task };
      })
    ]);
  }

  return (
    <div className={styles.todo}>
      <TasksCounter tasks={tasks} />
      <TasksAddForm addTask={addTask} />
      {tasks.map(task => {
        return(
          <Tasks key={task.id} task={task} isDoneToggle={isDoneToggle} removeTask={removeTask} />
        )
      })}
    </div>
  )
}

export default Todo;
