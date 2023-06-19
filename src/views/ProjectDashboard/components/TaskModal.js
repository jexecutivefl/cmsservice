import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {createTask} from "@/graphql/mutations";
import styles from '../styles/TaskModal.module.css'
export function TaskModal({ sprintId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function addNewTask() {
    const task = { name, description, sprintId };
    try {
      await API.graphql(graphqlOperation(createTask, { input: task }));
      setName("");
      setDescription("");
      setIsOpen(false);
    } catch (err) {
      console.log('error creating task:', err);
    }
  }

  if (!isOpen) {
    return <button className={styles.button} onClick={() => setIsOpen(true)}>Add Task</button>
  }

  return (
   <div className={isOpen ? styles.modal : styles.modalHidden}>
     <div className={styles.modalContent}>
       <input
        className={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Task name"
       />
       <button className={styles.button} onClick={addNewTask}>Create Task</button>
       <button className={styles.button} onClick={() => setIsOpen(false)}>Cancel</button>
     </div>
   </div>
  );
}

