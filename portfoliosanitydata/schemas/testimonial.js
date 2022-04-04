import { BillIcon } from "@sanity/icons";

export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: BillIcon,
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      description: "Please use unique ids",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "text",
      title: "Text",
      type: "string",
      description: "Write review here",
    },

    {
      name: "country",
      title: "Country",
      type: "string",
      description: "Country here",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      description: "URL here",
    },
  ],
  preview: {
    select: {
      title: "id",
      name: "name",
      country: "country",
    },
    prepare(selection) {
      return {
        title: `${selection.title ? `${selection.title}:` : ""} ${
          selection.name
        } `,
        date: selection.date,
        subtitle: selection.country,
      };
    },
  },
};
