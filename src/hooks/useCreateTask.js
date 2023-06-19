import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createTask } from '../graphql/mutations'; // path to your generated mutations

export const useCreateTask = () => {
  const [isLoading, setIsLoading] = useState(false);

  const newTask = async (task) => {
    setIsLoading(true);
    try {
      await API.graphql(graphqlOperation(createTask, { input: task }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error creating new task', error);
    }
  };

  return { newTask, isLoading };
};
