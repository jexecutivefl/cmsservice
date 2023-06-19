import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listProjects } from "@/graphql/queries";

export const useGetProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Fetching projects...');
        const projectData = await API.graphql(graphqlOperation(listProjects));
        console.log('Projects fetched:', projectData.data.listProjects.items);
        setProjects(projectData.data.listProjects.items);
      } catch (error) {
        console.error('Error fetching projects', error);
        setError(error);
      }
    };

    fetchProjects();
  }, []);

  return { projects, error };
};
