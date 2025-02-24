import { useState } from "react"
import "./TodoPage.css"

function TodoPage() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [todos, setTodos] = useState([])
    const [isEditing, setIsEditing] = useState(false);

    const titleHandler = (event) => setTitle(event.target.value)
    const descriptionHandler = (event) => setDescription(event.target.value)
    const dueDateHandler = (event) => setDueDate(event.target.value)
    const [currentTodo, setCurrentTodo] = useState(null);

    const newTaskHandler = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.random(),
            title,
            description,
            dueDate,
            date: new Date().toISOString().split("T")[0],
            done: false,
            editDate: null,
        }

        setTodos(prevState => [newTodo, ...prevState])

        setTitle("")
        setDescription("")
        setDueDate("")
    }
  
    const calculateTimeLeft = (dueDate) => {
        if (!dueDate) return "No due date"; 
    
        const now = new Date();
        const due = new Date(dueDate);
        const diffMs = due - now; 
    
        if (diffMs <= 0) return "Overdue"; 
    

        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
        if (days > 0) return `${days} days left`;
        if (hours > 0) return `${hours} hours left`;
        return `${minutes} minutes left`;
    };

    const toggleDoneHandler = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };
    
    const deleteTask = (idToDelete) => {
        setTodos(prevState => prevState.filter((todo) => todo.id !== idToDelete)) // add prevState
    }

    const editTaskHandler = (todo) => {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
    };

    const handleEditInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentTodo(prevState => ({ ...prevState, [name]: value }));
    };

    const saveEditHandler = (event) => {
        event.preventDefault();
        setTodos(prevState =>
            prevState.map((todo) =>
                todo.id === currentTodo.id
                    ? { ...currentTodo, editDate: new Date().toISOString().split("T")[0] }
                    : todo
            )
        );
        setIsEditing(false);
        setCurrentTodo(null);
    };

    const cancelEditHandler = () => {
        setIsEditing(false);
        setCurrentTodo(null);
    };

    const todoList = [...todos]
    .sort((a,b) => a.done - b.done)
    .map((todo) => (
        <li key={todo.id}>
               {isEditing && currentTodo && currentTodo.id === todo.id ? (
                <form onSubmit={saveEditHandler}>
                    <input
                        type="text"
                        name="title"
                        value={currentTodo.title}
                        onChange={handleEditInputChange}
                        required
                    />
                    <textarea
                        name="description"
                        value={currentTodo.description}
                        onChange={handleEditInputChange}
                        rows="5"
                        cols="30"
                    />
                    <input
                        type="date"
                        name="dueDate"
                        value={currentTodo.dueDate}
                        onChange={handleEditInputChange}
                        required
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={cancelEditHandler}>Cancel</button>
                </form>
             ) : (
            <p><input 
                    type="checkbox" 
                    checked={todo.done} 
                    onChange={() => toggleDoneHandler(todo.id)} 
                    style={{ marginRight: "10px" }} 
                />
                <strong>{todo.title} </strong> ({todo.description})
                <span style={{ color: "grey" }}>
                {" "} - Due: {todo.dueDate} (Created: {todo.date})
                {todo.editDate && (
                    <> - Edited: {new Date(todo.editDate).toLocaleString()}</>
                )}
                {" "} - {todo.done ? "✅ Done" : " "}
                </span>
                <span style={{ color: "pink" }}> - {calculateTimeLeft(todo.dueDate)}</span>
                <button onClick={() => editTaskHandler(todo)} style={{ marginLeft: "10px" }}>Edit</button>
                <button onClick={() => deleteTask(todo.id)} style={{ marginLeft: "10px", color: "red" }}>X</button>
                </p> 
            )}
        </li>
    ));

return (
             <div>
              <h1>Todo List:</h1>
        <div className="todo-page">
        <div className="todo_form">
            <form onSubmit={newTaskHandler}>
            <label>Title</label>
    <input type="text" value={title} onChange={titleHandler}  required></input>
    <br />
    <textarea 
    value={description} 
    onChange={descriptionHandler} 
    placeholder="Add description..." 
    rows="5" 
    cols="30" 
    min="2" 
    max="500"></textarea>
    <br />
    <label htmlFor="duedate">Due Date</label>
    <input id="duedate" type="date" value={dueDate} onChange={dueDateHandler}  required></input>
    <br /> 
                <button  className="create" type="submit">Create New Task</button>
                </form>
                </div>
           <div className="todo_list">
           <ul>{todoList}</ul>
            </div></div></div>
    )
}

export default TodoPage