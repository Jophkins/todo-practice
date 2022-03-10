import {useEffect, useState} from "react";
import axios from "axios";

import styles from "./Todo.module.scss";

import TasksCounter from "./TasksCounter";
import TasksAddForm from "./TasksAddForm";
import Tasks from "./Tasks";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks').then(({data}) => setTasks(data));
  }, []);

  const addTask = (userInput) => {
    if (userInput) {
      axios.post('http://localhost:3001/tasks', {
        id: Math.random().toString(36).substr(2, 9),
        text: userInput,
        isDone: false
      }).then(({data}) => {
        const newTask = {
          id: data.id,
          text: data.text,
          isDone: data.isDone
        };
        setTasks([...tasks, newTask]);
      });
    }
  }

  const removeTask = (id) => {
    if (window.confirm('Are you sure?')) {
      axios.delete('http://localhost:3001/tasks/' + id).then(() => {
        setTasks([...tasks.filter((task) => task.id !== id)]);
      });
    }
  }

  const isDoneToggle = (id, isDone) => {
    axios.patch('http://localhost:3001/tasks/' + id, {
      isDone: !isDone
    });
    setTasks([
      ...tasks.map((task) => {
        return task.id === id ? {...task, isDone: !task.isDone} : {...task};
      })
    ]);
  }

  return (
    <div className={styles.todo}>
      <TasksCounter tasks={tasks}/>
      <TasksAddForm addTask={addTask}/>
      {tasks.map(task => {
        return (
          <Tasks key={task.id} task={task} isDoneToggle={isDoneToggle} removeTask={removeTask}/>
        )
      })}
    </div>
  )
}

export default Todo;
