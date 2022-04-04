import { CodeBlockIcon } from "@sanity/icons";

export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  icon: CodeBlockIcon,

  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      description: "Please use unique ids",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Please enter project title here.",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Write tagline for project here",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Write category for project here, example (fullstack, frontend, backend)",
    },
    {
      name: "liveUrl",
      title: "LiveURL",
      type: "string",
      description: "Project's URL here",
    },
    {
      name: "repositoryUrl",
      title: "RepositoryURL",
      type: "string",
      description: "Project code repository URL here",
    },
    {
      name: "img",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "id",
      name: "title",
      media: "img",
      category: "category",
    },
    prepare(selection) {
      return {
        title: `${selection.title ? `${selection.title}:` : ""} ${
          selection.name
        } `,
        date: selection.date,
        subtitle: selection.category,
        media: selection.media,
      };
    },
  },
};
