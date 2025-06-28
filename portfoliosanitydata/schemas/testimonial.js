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
      description: "Please use unique sequential IDs (1, 2, 3...)",
      validation: (Rule) => Rule.required().positive().integer(),
    },
    {
      name: "name",
      title: "Client Name",
      type: "string",
      description: 'Enter full name (e.g., "John Smith")',
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "position",
      title: "Position/Title",
      type: "string",
      description: "Client's job title or position (e.g., 'CEO at TechCorp')",
      validation: (Rule) => Rule.max(100),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      description: "Client's company or organization",
      validation: (Rule) => Rule.max(100),
    },
    {
      name: "text",
      title: "Testimonial Text",
      type: "text",
      description: "The client's testimonial/review",
      rows: 4,
      validation: (Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Client's rating (1-5 stars)",
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      options: {
        list: [
          { title: "1 Star", value: 1 },
          { title: "2 Stars", value: 2 },
          { title: "3 Stars", value: 3 },
          { title: "4 Stars", value: 4 },
          { title: "5 Stars", value: 5 },
        ],
        layout: "radio",
      },
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      description: "Client's country or location",
      validation: (Rule) => Rule.max(50),
    },
    {
      name: "url",
      title: "Client URL",
      type: "url",
      description: "Link to client's website, LinkedIn, or portfolio",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }),
    },
    {
      name: "avatar",
      title: "Client Avatar",
      type: "image",
      description: "Client's profile picture (optional)",
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
        },
      ],
    },
    {
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      description: "Mark as featured testimonial (will appear first)",
      initialValue: false,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which testimonials appear (lower numbers first)",
      validation: (Rule) => Rule.positive().integer(),
    },
    {
      name: "active",
      title: "Active Testimonial",
      type: "boolean",
      description: "Whether this testimonial should be displayed",
      initialValue: true,
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
      title: "Rating (High to Low)",
      name: "ratingDesc",
      by: [{ field: "rating", direction: "desc" }],
    },
    {
      title: "Newest First",
      name: "newestFirst",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "avatar",
      rating: "rating",
      featured: "featured",
    },
    prepare(selection) {
      const { title, subtitle, media, rating, featured } = selection;
      const stars = "⭐".repeat(rating || 0);
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: subtitle ? `${subtitle} ${stars}` : stars,
        media: media,
      };
    },
  },
};
