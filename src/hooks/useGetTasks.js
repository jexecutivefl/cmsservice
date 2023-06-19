import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getSprint } from '../graphql/queries'; // path to your generated queries

export const useGetTasks = (sprintId) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const sprintData = await API.graphql(graphqlOperation(getSprint, { id: sprintId }));
        setTasks(sprintData.data.getSprint.tasks.items);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    fetchTasks();
  }, [sprintId]);

  return tasks;
};
