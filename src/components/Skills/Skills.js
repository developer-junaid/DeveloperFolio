import React from "react";
import classes from "./skills.module.css";
import LinearProgress from "@bit/developer-junaid.collection.linear-progress";

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>

      <div className={classes.techs}>
        <LinearProgress label="HTML" value={100} color={"green"} />
        <LinearProgress label="CSS" value={95} color={"green"} />
        <LinearProgress label="Sass" value={90} color={"green"} />
        <LinearProgress label="Bootstrap" value={85} color={"green"} />
        <LinearProgress label="Material UI" value={90} color={"green"} />
        <LinearProgress label="Figma" value={90} color={"green"} />

        <LinearProgress
          label="Javascript and (ES+6)"
          value={95}
          color={"green"}
        />
        <LinearProgress label="ReactJs" value={95} color={"green"} />
        <LinearProgress label="GatsbyJs" value={90} color={"green"} />
        <LinearProgress label="Headless CMS" value={85} color={"green"} />

        <LinearProgress label="Typescript" value={90} color={"green"} />

        <LinearProgress
          label="GraphQl / Rest-API Consumption/Building"
          value={85}
          color={"green"}
        />
        <LinearProgress label="Firebase" value={80} color={"green"} />
        <LinearProgress label="Python" value={85} color={"green"} />

        <LinearProgress label="ML Libraries" value={50} color={"green"} />
      </div>
    </section>
  );
};

export default Skills;
