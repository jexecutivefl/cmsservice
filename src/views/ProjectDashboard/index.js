import { useState, useEffect } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listSprints } from "@/graphql/queries";
import { ProjectModal } from "@/views/ProjectDashboard/components/ProjectModal";
import { SprintModal } from "@/views/ProjectDashboard/components/SprintModal";
import { TaskModal } from "@/views/ProjectDashboard/components/TaskModal";
import Board from "@/views/ProjectDashboard/components/Board";
import { GridContainer, GridItem } from "@/components/Grid/Grid";
import ProjectCards from "@/views/ProjectDashboard/components/ProjectCards";

export function ProjectDashboard() {
  const [projectID, setProjectID] = useState(null);
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    if(projectID) {
      fetchSprints();
    }
  }, [projectID]);

  async function fetchSprints() {
    try {
      const sprintData = await API.graphql(graphqlOperation(listSprints, { filter: { projectID: { eq: projectID }}}));
      setSprints(sprintData.data.listSprints.items);
    } catch (err) {
      console.log('error fetching sprints:', err);
    }
  }

  const handleCardClick = (cardId) => {
    console.log(`Card clicked: ${cardId}`);
    setProjectID(cardId);
  };

  return (
   <div>
     <h1>Dashboard</h1>
     <ProjectModal />
     <ProjectCards onCardClick={handleCardClick} />
     {
       projectID ? (
        <>
          <GridItem width={4}>
            <SprintModal projectID={projectID} setSprints={setSprints} />
          </GridItem>
          <Board projectID={projectID} sprints={sprints}/>
        </>
      ):(
       <div>
         Choose a Project
       </div>
       )
     }
   </div>
  );
}
