import React from "react";
import "./about.css";
// import ME from "../../assets/me-about.jpg";
import me from "../../assets/me1.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "../../index.css";

function About() {
  return (
    <section id="about">
      <h5 class="h55">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher </small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Client</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ complete</small>
            </article>
          </div>
          <div class="text">
            <br></br>I'm Poonam and I'm a <span>Software Engineer</span>
          </div>
          <p>
            Hello, I'm a Computer Science Engineering student who found her
            true passion in programming and development. I knew this is what I
            wanted to do in my life! I love the combination of creative and
            logical problem-solving skills I got to use when writing code. And I
            love how there's always more to learn!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
