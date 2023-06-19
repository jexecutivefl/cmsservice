import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createSprint } from "@/graphql/mutations";
import styles from '../styles/SprintModal.module.css';

export function SprintModal({ projectID, setSprints }) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState("TODO");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [priority, setPriority] = useState(null)
  const [sprintId, setSprintId] = useState(null);

  async function addNewSprint() {
    setError(null); // Reset error state
    if(name.trim() === "") {
      setError("Please enter a name for the sprint.");
      return; // Don't proceed if no name is entered
    }

    const sprint = { name, state, projectID, priority };
    console.log(sprint)
    try {
      const newSprint = await API.graphql(graphqlOperation(createSprint, { input: sprint }));
      setName("");
      setIsOpen(false);
      // After creating a new sprint, update the sprints state
      setSprints(prevSprints => [...prevSprints, newSprint.data.createSprint]);
    } catch (err) {
      console.log('error creating sprint:', err);
      setError("An error occurred while creating the sprint. Please try again."); // Show error to user
    }
  }

  if (!isOpen) {
    return <button className={styles.button} onClick={() => setIsOpen(true)}>Add Sprint</button>
  }

  return (
   <div className={isOpen ? styles.modal : styles.modalHidden}>
     <div className={styles.modalContent}>
       {error && <p className={styles.error}>{error}</p>} {/* Display error message */}
       <input
        className={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Sprint name"
       />
       <input
        className={styles.input}
        type={'number'}
        value={priority}
        onChange={e => setPriority(e.target.value)}
        placeholder="Priority"
       />
       <button className={styles.button} onClick={addNewSprint}>Create Sprint</button>
       <button className={styles.button} onClick={() => setIsOpen(false)}>Cancel</button>
     </div>
   </div>
  );
}