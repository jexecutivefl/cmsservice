import React from 'react';
import {FlexBox} from "@/components/FlexBox/FlexBox";
import Card from "@/components/Card";
import {useGetProjects} from "@/hooks/useGetProjects";

function ProjectCards({ onCardClick }) {
  const { projects } = useGetProjects();
  return (
   <FlexBox direction={'row'} justify={'space-evenly'} align={'center'}>
     {Array.isArray(projects) && projects.map(project => (
      <div key={project.id} onClick={() => onCardClick(project.id)}>
        <Card
         title={project.name}
         style={{ width: 300 }}
        >
          <p>{project.description}</p>
        </Card>
      </div>
     ))}
   </FlexBox>
  );
}

export default ProjectCards