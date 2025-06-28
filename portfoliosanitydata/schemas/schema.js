// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// My Schemas
import testimonial from "./testimonial";
import portfolio from "./portfolio";
import service from "./service";
import siteSettings from "./siteSettings";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings, // Global site settings (should be first)
    portfolio,    // Portfolio projects
    service,      // Services offered
    testimonial,  // Client testimonials
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
