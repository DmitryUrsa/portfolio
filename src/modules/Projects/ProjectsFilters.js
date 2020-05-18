import React from "react";
import { ProjectsConsumer } from "../../Context";

const ProjectsFilters = ({ filterList }) => {
  return (
    <ProjectsConsumer>
      {(value) => {
        const { handleFilter, filterBy } = value;
        const handleClick = (event) => {
          let items = document.querySelectorAll(".projects-filters__item");
          items.forEach((el) => {
            el.classList.remove("active");
          });
          event.target.classList.add("active");
        };

        return (
          <div className="projects-filters">
            {filterList.map((item, index) => {
              return (
                <button
                  className={`projects-filters__item ${
                    item === filterBy ? "active" : ""
                  }`}
                  value={item}
                  onClick={(event) => {
                    handleClick(event);
                    handleFilter(event);
                  }}
                  name="filterBy"
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>
        );
      }}
    </ProjectsConsumer>
  );
};

export default ProjectsFilters;
