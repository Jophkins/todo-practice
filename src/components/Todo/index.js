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

  return (
    <div className={styles.todo}>
      <TasksCounter tasks={tasks} />
      <TasksAddForm />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default Todo;
