import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getProject } from '../graphql/queries'; // path to your generated queries

export const useGetProject = (projectId) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await API.graphql(graphqlOperation(getProject, { id: projectId }));
        setProject(projectData.data.getProject);
      } catch (error) {
        console.error('Error fetching project', error);
      }
    };

    fetchProject();
  }, [projectId]);

  return project;
};
