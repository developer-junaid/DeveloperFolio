# Connecting Sanity to my portfolio

- Signup to sanity

## Setup Sanity Locally

- Install sanity cli :`npm i -g @sanity/cli`
- Login to sanity using cli run: `sanity login` (Select your preferred method)
- Initialize sanity project run: `sanity init`
- We are going to see a list of questions for us to answer in the next steps. Let's walk through those!
- - Create new project — Hit Enter.
- - Your project name: — We can name it whatever we would like. Let's “Portfolio Sanity Data" for this project.
- - Use the default dataset configuration? — The default dataset configuration has a public dataset named “production”, let's stick with that. So type in “Y” and hit Enter.
- - Project output path: — This will show us the path where our sanity project will live. The path should show the path that leads to this: /developerFolio/portfoliosanitydata. Hit Enter.
- - Select project template: — Here we are going to choose “Movies (schema + Sample data)”. Using the arrow keys, navigate to that so it’s showing blue. Hit Enter once there. Success!
- Run Sanity Studio in the browser, first navigate to sanity project : `cd portfoliosanitydata`
- Run: `sanity start`
- Visit localhost:3333 to view live studio and add your data

## Connect Sanity to React App

- Install sanity client `npm i @sanity/client`
- Create file src/client.js and add following code

```
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "Your Project ID Here", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});
```

- Get projectId and dataset from portfoliosanitydata/sanity.json and paste in the value of those keys
- Run this command to allow cors `sanity cors add http://localhost:3000` and type `y` and press enter
