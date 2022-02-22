

const TasksItem = ({ tasks }) => {

  return tasks.map(item => {
    return (
      <div className="taskItem">
        {item.text}
      </div>
    )
  });
}

export default TasksItem;