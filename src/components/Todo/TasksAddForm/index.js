import {useState} from "react";


const TasksAddForm = ({ addTask }) => {

  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput('')
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event)
    }
  }

  return(
    <div className="taskAddForm">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} onKeyDown={handleKeyPress} type="text" value={userInput} placeholder="Task text here" maxLength="40"/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default TasksAddForm;