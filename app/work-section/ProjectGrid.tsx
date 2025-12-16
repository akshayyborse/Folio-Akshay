// ProjectGrid.tsx
import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";

const ProjectGrid = () => {
  return (
    <div className="w-full">
      {devProjects.map((project: ProjectProps) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
