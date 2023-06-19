import {useGetProjects} from "@/hooks/useGetProjects";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Typography from "@/components/Typeography";

export default function Dashboard() {
  const projects = useGetProjects();

  return (
   <div>
     {projects.map((project) => (
      <Card key={project.id}>
        <Typography variant="h1">{project.name}</Typography>
        <Button variant="primary">View Project</Button>
      </Card>
     ))}
   </div>
  );
}
