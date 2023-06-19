import { API, graphqlOperation } from 'aws-amplify';
import { useState } from 'react';
import { createSprint } from '../graphql/mutations';

export function AddSprint({ projectId }) {
  const [state, setState] = useState("TODO");

  async function addNewSprint() {
    const sprint = { state, projectId };
    try {
      await API.graphql(graphqlOperation(createSprint, { input: sprint }));
      setState("TODO");
    } catch (err) {
      console.log('error creating sprint:', err);
    }
  }

  return (
   <div>
     <button onClick={addNewSprint}>Create Sprint</button>
   </div>
  );
}
