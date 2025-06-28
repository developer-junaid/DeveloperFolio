// Animation constants
export const ANIMATION_CONFIG = {
  AOS_DURATION: 2000,
  AOS_OFFSET: 10,
  POLLING_INTERVAL: 30000, // 30 seconds
};

// Sanity query constants
export const SANITY_QUERIES = {
  ALL_DATA: `*[_type in ["testimonial", "portfolio", "service"]]{
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
  }`,
};

// Typed.js strings
export const TYPED_STRINGS = [
  "Fullstack Engineer (Stay Gold USA)",
  "Founder and CEO (Devnito UAE)",
];

// Navigation items
export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]; 