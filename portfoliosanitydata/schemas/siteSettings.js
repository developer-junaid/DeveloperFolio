import { SettingsIcon } from "@sanity/icons";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: SettingsIcon,
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      description: "Your portfolio site title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      description: "Brief description of your portfolio for SEO",
      rows: 3,
      validation: (Rule) => Rule.max(160),
    },
    {
      name: "author",
      title: "Author Name",
      type: "string",
      description: "Your full name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      description: "Your contact email",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      description: "Your contact phone number",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Your city, country",
    },
    {
      name: "avatar",
      title: "Profile Picture",
      type: "image",
      description: "Your profile picture",
      options: {
        hotspot: true,
        metadata: ['dimensions', 'palette'],
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "github",
          title: "GitHub",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        },
        {
          name: "twitter",
          title: "Twitter",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        },
        {
          name: "instagram",
          title: "Instagram",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        },
        {
          name: "youtube",
          title: "YouTube",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        },
        {
          name: "portfolio",
          title: "Portfolio Website",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        },
      ],
    },
    {
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "Title for search engines",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          description: "Description for search engines",
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "ogImage",
          title: "Open Graph Image",
          type: "image",
          description: "Image for social media sharing",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
    },
    prepare(selection) {
      const { title, author } = selection;
      return {
        title: title || "Site Settings",
        subtitle: author ? `by ${author}` : "No author set",
      };
    },
  },
}; 