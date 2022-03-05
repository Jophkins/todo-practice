const TasksCounter = ({tasks}) => {

  const completedTasks = tasks.filter(item => item.isDone === true);

  return (
    <div className="tasksCounter">
      <h1>Tasks count: '{(tasks.length) ? (tasks.length) : "Loading..."}' | Completed:
        '{(tasks.length) ? (completedTasks.length) : "Loading..."}'</h1>
    </div>
  )
}

export default TasksCounter;