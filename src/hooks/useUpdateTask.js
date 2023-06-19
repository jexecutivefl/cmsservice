import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updateTask } from '../graphql/mutations'; // path to your generated mutations

export const useUpdateTask = () => {
  const [isLoading, setIsLoading] = useState(false);

  const editTask = async (task) => {
    setIsLoading(true);
    try {
      await API.graphql(graphqlOperation(updateTask, { input: task }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error updating task', error);
    }
  };

  return { editTask, isLoading };
};
