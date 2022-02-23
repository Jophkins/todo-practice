

const Tasks = ({ task }) => {

  return(
    <div className="tasks">
      <div className="tasks-item">
        {task.text}
      </div>
    </div>
  )
}

export default Tasks;