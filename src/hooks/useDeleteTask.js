import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { deleteTask } from '../graphql/mutations'; // path to your generated mutations

export const useDeleteTask = () => {
  const [isLoading, setIsLoading] = useState(false);

  const removeTask = async (taskId) => {
    setIsLoading(true);
    try {
      await API.graphql(graphqlOperation(deleteTask, { input: { id: taskId } }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error deleting task', error);
    }
  };

  return { removeTask, isLoading };
};
