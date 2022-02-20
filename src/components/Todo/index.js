import {useState} from "react";

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

  const completedTasks = tasks.filter(item => item.isDone === true);

  return (
    <div className="Todo">
      <div className="TasksCounter">
        <h1>Tasks count: '{tasks.length}' | Completed: '{completedTasks.length}'</h1>
      </div>
      <div className="TaskAddForm">
        <form>
          <input type="text"/>
          <button>Add</button>
        </form>
      </div>
      <div className="tasks">
        {tasks[0].text}
        {tasks[1].text}
      </div>
    </div>
  )
}

export default Todo;