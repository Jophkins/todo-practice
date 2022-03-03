import styles from "./Tasks.module.scss";

const Tasks = ({task, isDoneToggle, removeTask}) => {

  const checkHandler = () => {
    isDoneToggle(task.id);
  }

  const removeHandler = () => {
    removeTask(task.id)
  }

  return (

    <div className={styles.tasksItem}>
      <input className={styles.checkBox} type="checkbox" defaultChecked={task.isDone} onChange={checkHandler} />
      {task.text}
      <img className={styles.crossSign} onClick={removeHandler}
           src="https://img.icons8.com/material-outlined/24/000000/multiply--v1.png" alt="remove sign"/>
    </div>

  )
}

export default Tasks;