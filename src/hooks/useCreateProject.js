import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listProjects } from '../graphql/queries'; // path to your generated queries

export const useGetProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await API.graphql(graphqlOperation(listProjects));
        setProjects(projectData.data.listProjects.items);
      } catch (error) {
        console.error('Error fetching projects', error);
      }
    };

    fetchProjects();
  }, []);

  return projects;
};
