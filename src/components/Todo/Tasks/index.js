import TasksItem from "./TasksItem";


const Tasks = ({ tasks }) => {

  return(
    <div className="tasks">
      <TasksItem tasks={tasks} />
    </div>
  )
}

export default Tasks;