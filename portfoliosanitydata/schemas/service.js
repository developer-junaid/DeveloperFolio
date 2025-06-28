import { BulbOutlineIcon } from "@sanity/icons";

export default {
  name: "service",
  title: "Service",
  type: "document",
  icon: BulbOutlineIcon,
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
      description: "Enter the service title (e.g., 'Web Development')",
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "description",
      title: "Service Description",
      type: "text",
      description: "Detailed description of the service",
      rows: 3,
      validation: (Rule) => Rule.required().min(10).max(500),
    },
    {
      name: "icon",
      title: "Service Icon",
      type: "image",
      description: "Icon representing the service",
      options: {
        hotspot: true,
        metadata: ['dimensions', 'palette'],
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for accessibility",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Technologies & Skills",
      type: "array",
      of: [{ type: "string" }],
      description: "List of technologies, tools, or skills related to this service",
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "features",
      title: "Service Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of features or deliverables included in this service",
      options: {
        layout: "list",
      },
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which services appear (lower numbers first)",
      validation: (Rule) => Rule.positive().integer(),
    },
    {
      name: "active",
      title: "Active Service",
      type: "boolean",
      description: "Whether this service is currently offered",
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Alphabetical",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "icon",
      active: "active",
    },
    prepare(selection) {
      const { title, subtitle, media, active } = selection;
      return {
        title: active ? title : `[INACTIVE] ${title}`,
        subtitle: subtitle ? subtitle.substring(0, 50) + "..." : "No description",
        media: media,
      };
    },
  },
};
