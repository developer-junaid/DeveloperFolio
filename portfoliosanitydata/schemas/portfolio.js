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
      description: "Please use unique sequential IDs (1, 2, 3...)",
      validation: (Rule) => Rule.required().positive().integer(),
    },
    {
      name: "title",
      title: "Project Title",
      type: "string",
      description: "Enter the project title (e.g., 'E-commerce Platform')",
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "text",
      description: "Brief description of the project (max 200 characters)",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Select the project category",
      options: {
        list: [
          { title: "Full Stack", value: "fullstack" },
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Mobile", value: "mobile" },
          { title: "UI/UX", value: "uiux" },
          { title: "DevOps", value: "devops" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Detailed Description",
      type: "text",
      description: "Detailed project description for portfolio display",
      rows: 4,
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      description: "List of technologies, frameworks, and tools used",
      options: {
        layout: "tags",
      },
    },
    {
      name: "liveUrl",
      title: "Live URL",
      type: "url",
      description: "Link to the live project (leave empty if private)",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }),
    },
    {
      name: "repositoryUrl",
      title: "Repository URL",
      type: "url",
      description: "Link to the code repository (leave empty if private)",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }),
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      description: "Mark as featured project (will appear first)",
      initialValue: false,
    },
    {
      name: "img",
      title: "Project Image",
      type: "image",
      description: "Main project screenshot or logo",
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
        {
          name: "caption",
          title: "Caption",
          type: "string",
          description: "Optional caption for the image",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
      description: "Additional project screenshots",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which projects appear (lower numbers first)",
      validation: (Rule) => Rule.positive().integer(),
    },
  ],
  orderings: [
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "asc" },
        { field: "id", direction: "asc" },
      ],
    },
    {
      title: "Newest First",
      name: "newestFirst",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "img",
      featured: "featured",
    },
    prepare(selection) {
      const { title, subtitle, media, featured } = selection;
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: subtitle ? `Category: ${subtitle}` : "No category",
        media: media,
      };
    },
  },
};
