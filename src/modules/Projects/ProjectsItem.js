import React from "react";
import { Link } from "react-router-dom";

const ProjectsItem = ({ project }) => {
  const { slug, thumbnail, name } = project;
  const thumbnail_width = "330";
  const thumbnail_height = "150";

  return (
    <Link to={`/project/${slug}`} className="project-item">
      <div className="project-item__image">
        <img src={`${thumbnail}?w=${thumbnail_width}`} alt="" />
      </div>
      <div className="project-item__name">{name}</div>
    </Link>
  );
};

export default ProjectsItem;
