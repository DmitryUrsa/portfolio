import React, { Component } from "react";
import Client from "./Contentful";

const ProjectsContext = React.createContext();

class ProjectsProvider extends Component {
  state = {
    projects: [],
    sortedProjects: [],
    loading: true,
    filterBy: "all",
  };
  // getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "portfolioProjects",
        order: "sys.createdAt",
      });
      let projects = this.formatData(response.items);
      let tempTags = new Set();
      projects.map((project) => {
        if ("tags" in project) {
          project.tags.map((tag) => {
            return tempTags.add(tag);
          });
        }
      });

      this.setState({
        projects,
        sortedProjects: projects,
        loading: false,
        projectTags: ["all", ...tempTags],
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let fields = item.fields;
      let id = item.sys.id;
      let thumbnail = fields.thumbnail.fields.file.url;
      let name = fields.name;
      let description = "";
      if ("description" in fields) {
        description = fields.description.content;
      }
      let slug = fields.slug;

      let room = { ...fields, slug, description, name, thumbnail, id };
      return room;
    });
    return tempItems;
  }

  getProjects = (slug) => {
    let tempProjects = [...this.state.projects];
    const room = tempProjects.find((room) => room.slug === slug);
    return room;
  };

  handleFilter = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterProjects
    );
  };

  filterProjects = () => {
    let { projects, filterBy } = this.state;
    let tempProjects = [...projects];
    if (filterBy && filterBy !== "all") {
      tempProjects = tempProjects.filter((project) => {
        if ("tags" in project) {
          return project.tags.includes(filterBy);
        }
      });
    }

    this.setState({
      sortedProjects: tempProjects,
    });
  };

  render() {
    return (
      <ProjectsContext.Provider
        value={{
          ...this.state,
          getProjects: this.getProjects,
          handleFilter: this.handleFilter,
        }}
      >
        {this.props.children}
      </ProjectsContext.Provider>
    );
  }
}

const ProjectsConsumer = ProjectsContext.Consumer;

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };
