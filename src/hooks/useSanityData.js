import { useState, useEffect, useCallback, useMemo } from 'react';
import sanityClient from '../client';

export const useSanityData = (pollingInterval = 30000) => {
  const [data, setData] = useState({
    projects: [],
    services: [],
    testimonials: [],
    settings: null
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [hasInitialData, setHasInitialData] = useState(false);

  const fetchData = useCallback(async (isInitialLoad = false) => {
    try {
      if (isInitialLoad) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }
      setError(null);
      
      // Use the working query that fetches all content types
      const sanityData = await sanityClient.fetch(`
        *[_type in ["testimonial", "portfolio", "service"]]{
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
        }
      `);

      // Categorize the data based on content type
      const categorizedData = sanityData.reduce((acc, doc) => {
        if (doc.country) {
          // It is a testimonial
          acc.testimonials.push(doc);
        } else if (doc.liveUrl) {
          // It is a project
          acc.projects.push(doc);
        } else {
          // It is a service
          acc.services.push(doc);
        }
        return acc;
      }, { testimonials: [], projects: [], services: [] });

      // Process the data with backward compatibility and new field support
      const processedData = {
        projects: (categorizedData.projects || []).map(project => ({
          id: project.id,
          title: project.title,
          tagline: project.tagline,
          description: project.description || '',
          category: project.category,
          technologies: project.technologies || [],
          liveUrl: project.liveUrl,
          repositoryUrl: project.repositoryUrl,
          featured: project.featured || false,
          order: project.order || 0,
          img: {
            asset: {
              url: project.img?.asset?.url || project.img?.url || ''
            },
            alt: project.img?.alt || '',
            caption: project.img?.caption || ''
          },
          gallery: project.gallery || []
        })),
        services: (categorizedData.services || []).map(service => ({
          title: service.title,
          description: service.description || '',
          tags: service.tags || [],
          features: service.features || [],
          order: service.order || 0,
          active: service.active !== false, // Default to true for backward compatibility
          icon: {
            asset: {
              url: service.icon?.asset?.url || service.icon?.url || ''
            },
            alt: service.icon?.alt || ''
          }
        })),
        testimonials: (categorizedData.testimonials || []).map(testimonial => ({
          id: testimonial.id,
          name: testimonial.name,
          position: testimonial.position || '',
          company: testimonial.company || '',
          text: testimonial.text,
          rating: testimonial.rating || 5,
          country: testimonial.country,
          url: testimonial.url,
          featured: testimonial.featured || false,
          order: testimonial.order || 0,
          active: testimonial.active !== false, // Default to true for backward compatibility
          avatar: testimonial.avatar ? {
            asset: {
              url: testimonial.avatar.asset?.url || testimonial.avatar.url || ''
            },
            alt: testimonial.avatar.alt || ''
          } : null
        })),
        settings: null // We'll add this later when needed
      };

      setData(processedData);
      setLastUpdated(new Date());
      
      if (isInitialLoad) {
        setHasInitialData(true);
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching Sanity data:', err);
    } finally {
      if (isInitialLoad) {
        setLoading(false);
      } else {
        setRefreshing(false);
      }
    }
  }, []);

  useEffect(() => {
    // Initial load
    fetchData(true);

    // Set up polling for background refreshes
    const interval = setInterval(() => {
      if (hasInitialData) {
        fetchData(false);
      }
    }, pollingInterval);
    
    return () => clearInterval(interval);
  }, [fetchData, pollingInterval, hasInitialData]);

  // Memoize the return object to prevent unnecessary re-renders
  const result = useMemo(() => ({
    ...data,
    loading,
    refreshing,
    error,
    lastUpdated,
    refetch: () => fetchData(false)
  }), [data, loading, refreshing, error, lastUpdated, fetchData]);

  return result;
}; 