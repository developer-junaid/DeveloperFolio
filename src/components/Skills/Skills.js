import React from "react";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar";
import classes from "./skills.module.css";

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
        <LinearProgressBar label="HTML" value={100} />
        <LinearProgressBar label="Front End Devlopment" value={95} />
        <LinearProgressBar label="CSS" value={95} />
        <LinearProgressBar label="Javascript" value={95} />
        <LinearProgressBar label="ReactJs" value={95} />
        <LinearProgressBar label="Typescript" value={90} />
        <LinearProgressBar label="Full Stack Devlopment" value={85} />
        <LinearProgressBar label="Sass" value={85} />
        <LinearProgressBar label="Bootstrap" value={85} />
        <LinearProgressBar label="Material UI" value={85} />
        <LinearProgressBar label="Python" value={85} />
        <LinearProgressBar label="GraphQl and Rest" value={75} />
        <LinearProgressBar label="Firebase" value={70} />
        <LinearProgressBar
          label="ML Libraries(Numpy, Pandas, Tensorflow)"
          value={50}
        />
      </div>
    </section>
  );
};

export default Skills;
