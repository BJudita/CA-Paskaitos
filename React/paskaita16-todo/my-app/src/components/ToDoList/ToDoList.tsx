import ToDoItem from "../ToDoItem/ToDoItem.tsx";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type ToDoListProps = {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

function ToDoList({ tasks, toggleTask, deleteTask }: ToDoListProps) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default ToDoList;