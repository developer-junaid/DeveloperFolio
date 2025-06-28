// Portfolio Queries
export const portfolioQueries = {
  // Get all portfolio projects with basic info
  allProjects: `*[_type == "portfolio" && active != false] | order(order asc, id asc) {
    id,
    title,
    tagline,
    description,
    category,
    technologies,
    liveUrl,
    repositoryUrl,
    featured,
    order,
    img {
      asset-> {
        url,
        metadata {
          dimensions,
          palette
        }
      },
      alt,
      caption
    },
    gallery[] {
      asset-> {
        url,
        metadata {
          dimensions
        }
      },
      alt,
      caption
    }
  }`,

  // Get featured projects only
  featuredProjects: `*[_type == "portfolio" && featured == true && active != false] | order(order asc, id asc) {
    id,
    title,
    tagline,
    category,
    liveUrl,
    repositoryUrl,
    img {
      asset-> {
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }`,

  // Get projects by category
  projectsByCategory: (category) => `*[_type == "portfolio" && category == "${category}" && active != false] | order(order asc, id asc) {
    id,
    title,
    tagline,
    category,
    liveUrl,
    repositoryUrl,
    img {
      asset-> {
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }`,

  // Get project categories
  categories: `array::distinct(*[_type == "portfolio" && active != false].category) | order(asc)`,
};

// Service Queries
export const serviceQueries = {
  // Get all active services
  allServices: `*[_type == "service" && active == true] | order(order asc) {
    title,
    description,
    tags,
    features,
    icon {
      asset-> {
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }`,

  // Get service by title
  serviceByTitle: (title) => `*[_type == "service" && title == "${title}" && active == true][0] {
    title,
    description,
    tags,
    features,
    icon {
      asset-> {
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }`,
};

// Testimonial Queries
export const testimonialQueries = {
  // Get all active testimonials
  allTestimonials: `*[_type == "testimonial" && active == true] | order(order asc, id asc) {
    id,
    name,
    position,
    company,
    text,
    rating,
    country,
    url,
    featured,
    avatar {
      asset-> {
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }`,

  // Get featured testimonials only
  featuredTestimonials: `*[_type == "testimonial" && featured == true && active == true] | order(order asc, id asc) {
    id,
    name,
    position,
    company,
    text,
    rating,
    country,
    url,
    avatar {
      asset-> {
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }`,

  // Get testimonials by rating
  testimonialsByRating: (minRating) => `*[_type == "testimonial" && rating >= ${minRating} && active == true] | order(rating desc, order asc) {
    id,
    name,
    position,
    company,
    text,
    rating,
    country,
    url,
    avatar {
      asset-> {
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }`,
};

// Site Settings Queries
export const siteSettingsQueries = {
  // Get all site settings
  allSettings: `*[_type == "siteSettings"][0] {
    title,
    description,
    author,
    email,
    phone,
    location,
    avatar {
      asset-> {
        url,
        metadata {
          dimensions,
          palette
        }
      },
      alt
    },
    socialLinks {
      github,
      linkedin,
      twitter,
      instagram,
      youtube,
      portfolio
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage {
        asset-> {
          url,
          metadata {
            dimensions
          }
        }
      }
    }
  }`,
};

// Combined Queries for Performance
export const combinedQueries = {
  // Get all data in one query (for initial load)
  allData: `{
    "projects": ${portfolioQueries.allProjects},
    "services": ${serviceQueries.allServices},
    "testimonials": ${testimonialQueries.allTestimonials},
    "settings": ${siteSettingsQueries.allSettings}
  }`,

  // Get featured content only
  featuredContent: `{
    "featuredProjects": ${portfolioQueries.featuredProjects},
    "featuredTestimonials": ${testimonialQueries.featuredTestimonials}
  }`,
};

// Legacy query for backward compatibility
export const legacyQuery = `*[_type in ["testimonial", "portfolio", "service"]]{
  _type == "testimonial" => {
    id,
    name,
    text,
    country,
    url
  },
  _type == "portfolio" => {
    id,
    title,
    tagline,
    category,
    liveUrl,
    repositoryUrl,
    img{
      asset->{url}
    },
  },
  _type == "service" => {
    title,
    tags,
    icon{
      asset->{url}
    },
  },
}`; 