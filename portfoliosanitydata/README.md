# Portfolio Sanity CMS

A modern, optimized Sanity CMS setup for portfolio management with enhanced schemas, validation, and performance.

## 🚀 Features

### Enhanced Schemas

- **Portfolio**: Projects with categories, technologies, galleries, and featured status
- **Services**: Service offerings with descriptions, features, and active status
- **Testimonials**: Client reviews with ratings, avatars, and company info
- **Site Settings**: Global configuration for SEO, social links, and contact info

### Key Improvements

- ✅ **Field Validation**: Comprehensive validation rules for data integrity
- ✅ **Image Optimization**: Hotspot support and metadata extraction
- ✅ **Content Organization**: Ordering, filtering, and featured content
- ✅ **SEO Ready**: Meta tags, Open Graph, and structured data
- ✅ **Performance**: Optimized queries and efficient data fetching
- ✅ **Accessibility**: Alt text and proper image handling

## 📁 Schema Structure

```
schemas/
├── schema.js          # Main schema index
├── portfolio.js       # Portfolio projects
├── service.js         # Services offered
├── testimonial.js     # Client testimonials
└── siteSettings.js    # Global site configuration

queries/
└── index.js          # Optimized Sanity queries
```

## 🛠️ Usage

### Portfolio Projects

- **Categories**: fullstack, frontend, backend, mobile, uiux, devops
- **Features**: Featured projects, galleries, technology tags
- **Validation**: Required fields, URL validation, image requirements

### Services

- **Active/Inactive**: Toggle service availability
- **Features**: List of deliverables and capabilities
- **Technologies**: Skills and tools used

### Testimonials

- **Ratings**: 1-5 star rating system
- **Featured**: Highlight best testimonials
- **Rich Content**: Company info, positions, avatars

### Site Settings

- **SEO**: Meta titles, descriptions, Open Graph images
- **Social Links**: GitHub, LinkedIn, Twitter, etc.
- **Contact Info**: Email, phone, location

## 🔧 Development

### Running the Studio

```bash
cd portfoliosanitydata
npm install
npm start
```

### Building for Production

```bash
npm run build
```

### Adding New Content

1. Start the studio: `npm start`
2. Navigate to localhost:3333
3. Create content using the enhanced schemas
4. Content updates automatically in your portfolio

## 📊 Query Examples

### Get All Projects

```javascript
import { portfolioQueries } from "./queries";
const projects = await client.fetch(portfolioQueries.allProjects);
```

### Get Featured Content

```javascript
import { combinedQueries } from "./queries";
const featured = await client.fetch(combinedQueries.featuredContent);
```

### Get Projects by Category

```javascript
const frontendProjects = await client.fetch(
  portfolioQueries.projectsByCategory("frontend")
);
```

## 🎯 Best Practices

### Content Management

- Use sequential IDs for portfolio and testimonials
- Mark featured content for priority display
- Add alt text to all images
- Use proper categories and tags

### Performance

- Use specific queries instead of fetching all data
- Implement proper ordering and filtering
- Cache frequently accessed content
- Optimize images with proper dimensions

### SEO

- Fill out all meta fields in site settings
- Use descriptive titles and descriptions
- Add Open Graph images for social sharing
- Include structured data where possible

## 🔄 Migration Notes

### From Old Schema

- New fields are optional with sensible defaults
- Existing content will continue to work
- Gradually add new fields as needed
- Use the migration guide for complex changes

## 📈 Future Enhancements

- [ ] Blog/Articles schema
- [ ] Skills/Technologies schema
- [ ] Experience/Resume schema
- [ ] Contact form integration
- [ ] Analytics integration
- [ ] Multi-language support

## 🤝 Contributing

1. Follow the existing schema patterns
2. Add proper validation rules
3. Include comprehensive documentation
4. Test queries for performance
5. Update this README for new features
