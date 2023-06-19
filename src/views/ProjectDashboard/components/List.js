import React from 'react';
import {useGetSprints} from "@/hooks/useGetSprints";
import SprintCard from "@/views/ProjectDashboard/components/SprintCard";


const List = ({ title, state, projectID }) => {
  const sprints = useGetSprints(projectID);

  const sprintsInState = sprints.filter(sprint => sprint.state === state);

  if (!sprints) {
    return <div>Loading...</div>;
  }

  return (
   <div>
     <h2>{title}</h2>
     {sprintsInState.map((sprint) => <SprintCard key={sprint.id} sprint={sprint} />)}
   </div>
  );
};

export default List;
