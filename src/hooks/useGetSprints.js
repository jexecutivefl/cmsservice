import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getProject } from '../graphql/queries'; // path to your generated queries

export const useGetSprints = (projectId) => {
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    const fetchSprints = async () => {
      try {
        const projectData = await API.graphql(graphqlOperation(getProject, { id: projectId }));
        setSprints(projectData.data.getProject.sprints.items);
      } catch (error) {
        console.error('Error fetching sprints', error);
      }
    };

    fetchSprints();
  }, [projectId]);

  return sprints;
};
