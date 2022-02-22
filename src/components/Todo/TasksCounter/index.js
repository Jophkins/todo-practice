

const TasksCounter = ({ tasks }) => {

  const completedTasks = tasks.filter(item => item.isDone === true);

  return (
    <div className="tasksCounter">
      <h1>Tasks count: '{tasks.length}' | Completed: '{completedTasks.length}'</h1>
    </div>
  )
}

export default TasksCounter;