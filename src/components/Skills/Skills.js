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
        <LinearProgress
          label="Front End Devlopment"
          value={95}
          color={"green"}
        />
        <LinearProgress label="CSS" value={95} color={"green"} />
        <LinearProgress label="Javascript" value={95} color={"green"} />
        <LinearProgress label="ReactJs" value={95} color={"green"} />
        <LinearProgress label="Typescript" value={90} color={"green"} />
        <LinearProgress
          label="Full Stack Devlopment"
          value={85}
          color={"green"}
        />
        <LinearProgress label="Sass" value={85} color={"green"} />
        <LinearProgress label="Bootstrap" value={85} color={"green"} />
        <LinearProgress label="Material UI" value={85} color={"green"} />
        <LinearProgress label="Python" value={85} color={"green"} />
        <LinearProgress label="GraphQl and Rest" value={75} color={"green"} />
        <LinearProgress label="Firebase" value={70} color={"green"} />
        <LinearProgress label="ML Libraries" value={50} color={"green"} />
      </div>
    </section>
  );
};

export default Skills;
