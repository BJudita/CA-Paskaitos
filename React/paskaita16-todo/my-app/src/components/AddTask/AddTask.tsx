import { useState } from "react";
import styles from "./AddTask.module.css";

type TaskProps = {
  addTask: (text: string) => void;
};

function AddTask({ addTask }: TaskProps) {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.input} type="text" value={text} onChange={handleChange} placeholder="Add a task" />
      <button className={styles.addBtn} type="submit">Add</button>
    </form>
  );
}

export default AddTask;