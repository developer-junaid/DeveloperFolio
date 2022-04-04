import { BulbOutlineIcon } from "@sanity/icons";

export default {
  name: "service",
  title: "service",
  type: "document",
  icon: BulbOutlineIcon,

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Please enter project title here.",
    },
    {
      name: "icon",
      title: "Service Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      };
    },
  },
};
