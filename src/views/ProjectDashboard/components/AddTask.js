import { API, graphqlOperation } from 'aws-amplify';
import { useState } from 'react';
import { createTask } from '../graphql/mutations';

export function AddTask({ sprintId }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function addNewTask() {
    const task = { name, description, sprintId };
    try {
      await API.graphql(graphqlOperation(createTask, { input: task }));
      setName("");
      setDescription("");
    } catch (err) {
      console.log('error creating task:', err);
    }
  }

  return (
   <div>
     <input
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="Task name"
     />
     <input
      value={description}
      onChange={e => setDescription(e.target.value)}
      placeholder="Task description"
     />
     <button onClick={addNewTask}>Create Task</button>
   </div>
  );
}
