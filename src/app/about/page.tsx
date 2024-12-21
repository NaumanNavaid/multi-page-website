import React from "react";
import styles from './about.module.css';

const About = () => {
  return (
    <div>
      <div className={styles.about}>
        <h1 className={styles.h1}>
          Assalam u alikum, I see that you reached my about page so let me tell you about myself
        </h1>
        <p className={styles.paragraph}>
          My name is Syed Nauman Navaid. I am currently learning Next.js to expand my expertise into UI/UX development. <br />
          I am an A-levels student who passed O-levels in 2023, and I am interested in seeing where this course takes me. 
        </p>
      </div>
    </div>
  );
}

export default About;