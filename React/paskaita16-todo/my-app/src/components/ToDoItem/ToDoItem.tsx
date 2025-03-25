import styles from "./ToDoItem.module.css";

type Task = {
    id: number;
    text: string;
    completed: boolean;
  };
  
  type ToDoItemProps = {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
  };
  
  function ToDoItem({ task, toggleTask, deleteTask }: ToDoItemProps) {
    return (
      <li>
        <input className={styles.checkBox} type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
        </span>
        <button className={styles.deleteBtn} onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    );
  }
  
  export default ToDoItem;