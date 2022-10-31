# 👨‍💻 Personal DevFolio (3.0)

### _Personal Portfolio built using ReactJs, Sanity CMS and Animation libraries, hope you like it. Tweak it and use it !!_

### Demo Video (3.0) :link: https://youtu.be/GrA2i1GNmbg

### Link :link: https://developerjunaid.com/

## Images

<img src='./project_images/home.png' />
<img src='./project_images/navbar.png' />
<img src='./project_images/services.png' />
<img src='./project_images/portfolio.png' />
<img src='./project_images/testimonials.png' />
<img src='./project_images/contact.png' />

## Mobile Responsive

<img src='./project_images/mobile.png' />

## Run Locally

- Run this command `git clone https://github.com/developer-junaid/DeveloperFolio.git`
- You are now in the dev environment and you can play around

### To Run Sanity CMS Locally

- Sign Up to [Sanity](https://www.sanity.io/)
- Navigate to /portfoliosanitydata folder in project using terminal Run: `cd portfoliosanitydata`
- Install dependencies Run: `npm install`
- Install Sanity CLI Run: `npm install -g @sanity/cli`
- Login to sanity using CLI run: `sanity login` (Select your preferred method)
- Initialize sanity project run: `sanity init`
- We are going to see a list of questions for us to answer in the next steps. Let's walk through those!
- - Create new project — Hit Enter.
- - Your project name: — We can name it whatever we would like. Let's “Portfolio Sanity Data" for this project.
- - Use the default dataset configuration? — The default dataset configuration has a public dataset named “production”, let's stick with that. So type in “Y” and hit Enter.
- - Project output path: — This will show us the path where our sanity project will live. The path should show the path that leads to this: /developerFolio/portfoliosanitydata. Hit Enter.
- - Select project template: — Here we are going to choose “Movies (schema + Sample data)”. Using the arrow keys, navigate to that so it’s showing blue. Hit Enter once there. Success!
- - Now Replace `schemas` folder with the folder from my repository
- Run Sanity Studio in the browser, first navigate to sanity project : `cd portfoliosanitydata`
- Run: `sanity start`
- Visit  [localhost:3333](http://localhost:3333/) to view live studio and add your data

### Connecting React App with Sanity Locally

- Get projectId and dataset from portfoliosanitydata/sanity.json and paste in the value of those keys in the src/client.js respected fields

## Tech Stack

- HTML5
- CSS3
- Javascript ES6
- React js
- Animation Libraries (Framer motion, react-scroll, aos)
- Firebase
- Github Actions
- Sanity.io (CMS)
