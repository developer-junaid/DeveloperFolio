// Data categorization helper
export const categorizeSanityData = (data) => {
  return data.reduce((acc, doc) => {
    if (doc.country) {
      acc.testimonials.push(doc);
    } else if (doc.liveUrl) {
      acc.projects.push(doc);
    } else {
      acc.services.push(doc);
    }
    return acc;
  }, { testimonials: [], projects: [], services: [] });
};

// Get unique categories from projects
export const getUniqueCategories = (projects) => {
  return [...new Set(projects.map(project => project.category))];
};

// Filter projects by category
export const filterProjectsByCategory = (projects, category) => {
  return projects.filter(project => project.category === category);
};

// Format date for display
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

// Check if URL is private
export const isPrivateUrl = (url) => {
  return url === 'private' || !url;
};

// Scroll to top helper
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}; 