import React from 'react'
import { StyledProjectsSection } from './styles';
import { PROJECTS } from '../../constants/projects';
import Project from './Project';

const ProjectsSection = ({ projectsRef, scrollY }) => {
  

  return (
    <StyledProjectsSection ref={projectsRef}>
      <h1>Projects</h1>
      {PROJECTS.map(project => 
        <Project 
          key={project.name} 
          project={project}
          scrollY={scrollY}
        />
      )}
    </StyledProjectsSection>
  )
}

export default ProjectsSection;
