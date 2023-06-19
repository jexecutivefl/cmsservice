import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {createProject} from "@/graphql/mutations";
import styles from '../styles/ProjectModal.module.css'
export function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function addNewProject() {
    const project = { name, description };
    try {
      await API.graphql(graphqlOperation(createProject, { input: project }));
      setName("");
      setDescription("");
      setIsOpen(false);
    } catch (err) {
      console.log('error creating project:', err);
    }
  }

  if (!isOpen) {
    return <button className={styles.button} onClick={() => setIsOpen(true)}>Add Project</button>
  }

  return (
   <div className={isOpen ? styles.modal : styles.modalHidden}>
     <div className={styles.modalContent}>
       <input
        className={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Project name"
       />
       <button className={styles.button} onClick={addNewProject}>Create Project</button>
       <button className={styles.button} onClick={() => setIsOpen(false)}>Cancel</button>
     </div>
   </div>
  );
}
