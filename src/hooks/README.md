# Custom Hooks

This directory contains custom React hooks for the application.

## useSanityData

A custom hook that handles data fetching from Sanity CMS with automatic revalidation.

### Usage

```jsx
import { useSanityData } from "../hooks/useSanityData";

function MyComponent() {
  const {
    projects,
    services,
    testimonials,
    loading,
    error,
    lastUpdated,
    refetch,
  } = useSanityData();

  // Use the data...
}
```

### Parameters

- `pollingInterval` (optional): Time in milliseconds between automatic data refreshes (default: 30000ms)

### Returns

- `projects`: Array of portfolio projects
- `services`: Array of services
- `testimonials`: Array of testimonials
- `loading`: Boolean indicating if data is being fetched
- `error`: Error message if fetch fails
- `lastUpdated`: Date of last successful data fetch
- `refetch`: Function to manually trigger data fetch
