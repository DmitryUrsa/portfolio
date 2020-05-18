import React from "react";
import "./Projects.css";
import ProjectsFilters from "./ProjectsFilters";
import ProjectsItem from "./ProjectsItem";
import Loading from "../Loading";
import { ProjectsConsumer } from "../../Context";

const Projects = () => {
  return (
    <>
      <h2 className="projects-header">Projects</h2>
      <ProjectsConsumer>
        {(value) => {
          const { loading, sortedProjects, projectTags } = value;
          if (loading) {
            return <Loading />;
          }

          return (
            <>
              <ProjectsFilters filterList={projectTags} />
              <div className="projects-grid">
                {sortedProjects.map((item, index) => {
                  return <ProjectsItem project={item} key={index} />;
                })}
              </div>
            </>
          );
        }}
      </ProjectsConsumer>
    </>
  );
};

export default Projects;
