import {useState} from "react";


const TasksAddForm = () => {

  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <input onChange={handleChange} onKeyDown={handleKeyPress} type="text" value={userInput} placeholder="Task text here"/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default TasksAddForm;