import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createSprint } from '../graphql/mutations'; // path to your generated mutations

export const useCreateSprint = () => {
  const [isLoading, setIsLoading] = useState(false);

  const newSprint = async (sprint) => {
    setIsLoading(true);
    try {
      await API.graphql(graphqlOperation(createSprint, { input: sprint }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error creating new sprint', error);
    }
  };

  return { newSprint, isLoading };
};
