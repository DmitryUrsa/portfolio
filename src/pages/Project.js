import React, { Component } from "react";
import { ProjectsContext } from "../Context";
import Title from "../modules/Title/Title";
import Loading from "../modules/Loading";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = ProjectsContext;

  render() {
    const { getProjects } = this.context;
    const project = getProjects(this.state.slug);

    if (!project) {
      return <Loading />;
    } else {
      const { description, name } = project;
      const document = {
        nodeType: "document",
        content: [...description],
      };

      const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({
            data: {
              target: { fields },
            },
          }) =>
            `<a href="${fields.file.url}" target="_blank" rel="noopener noreferrer"><img src="${fields.file.url}?w=980" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/></a>`,
          [INLINES.HYPERLINK]: (node, next) =>
            `<a 
              href="${node.data.uri}" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ${next(node.content)}
            </a>`,
        },
      };

      return (
        <article>
          <Title title={name} />
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(document, options),
            }}
          ></div>
        </article>
      );
    }
  }
}
