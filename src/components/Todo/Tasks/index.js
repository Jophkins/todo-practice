

const Tasks = ({ task, isDoneToggle }) => {

  const checkHandler = () => {
    isDoneToggle(task.id);
  }

  return(
    <div className="tasks">
      <div className="tasks-item">
        <input type="checkbox" defaultChecked={task.isDone} onChange={checkHandler}/>
        {task.text}
      </div>
    </div>
  )
}

export default Tasks;