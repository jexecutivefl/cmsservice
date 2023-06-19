import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { deleteSprint } from '../graphql/mutations'; // path to your generated mutations

export const useDeleteSprint = () => {
  const [isLoading, setIsLoading] = useState(false);

  const removeSprint = async (sprintId) => {
    setIsLoading(true);
    try {
      await API.graphql(graphqlOperation(deleteSprint, { input: { id: sprintId } }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error deleting sprint', error);
    }
  };

  return { removeSprint, isLoading };
};
