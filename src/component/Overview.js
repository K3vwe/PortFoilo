import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import frontend from "../assets/logos/frontend.svg";
import others from "../assets/logos/others.svg";

const SkillDesign = styled.div`
  background-color: #f4f4f9;
  text-align: center;
  margin-top: -32px;
  color: #333;
  height: 85vh;
`;

export const Overview = () => (
  <React.Fragment>
    <SkillDesign>
      <Container style={container}>
        <h3 className="font-weigth-bold text-center mb-3">Skills Overview</h3>
        <p style={paragraph} className="text-secondary">
          I have more than 8 years' experience building rich web applications
          for clients all over the world. Below is a quick overview of my main
          technical skill sets and tools I use. Want to find out more about my
          experience? <a href="/">Check out my online resume</a>.
        </p>
        <div className="skills-blocks mx-auto pt-5">
          <div className="row">
            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
              <div className="skill-block-inner position-relative bg-white shodow-sm py-4 px-5">
                <h4 className="mb-4 mt-5 text-center">Frontend</h4>
                <div className="skill-icon-holder text-center d-inline-block rounded-circle position-absolute">
                  <img alt="" className="skills-icon" src={frontend} />
                </div>
                <ul className="skills-list list-unstyled text-left text-secondary">
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i>
                    React/Redux
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i> HTML/CSS
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i>
                    Webpack/Npm
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i>
                    JavaScript
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i> Node.js
                  </li>
                </ul>
              </div>
            </div>
            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
              <div className="skill-block-inner position-relative bg-white shdow-sm py-4 px-5">
                <h4 className="mb-4 mt-5 text-center">Soft Skills</h4>
                <div className="skill-icon-holder text-center rounded-circle position-absolute d-inline-block">
                  <img alt="" src={others} />
                </div>
                <ul className="skills-list list-unstyled text-left text-secondary">
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i>
                    Communication
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i> Resilence
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i>
                    Persistence
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i> Curious
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i> Bold
                  </li>
                </ul>
              </div>
            </div>
            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
              <div className="skill-block-inner position-relative bg-white shdow-sm py-4 px-5">
                <h4 className="mb-4 mt-5 text-center">Soft Skills</h4>
                <div className="skill-icon-holder text-center rounded-circle position-absolute d-inline-block">
                  <img alt="" src={others} />
                </div>
                <ul className="skills-list list-unstyled text-left text-secondary">
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i>
                    Communication
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i> Resilence
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i>
                    Persistence
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i> Curious
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check mr-2 text-primary"></i> Bold
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SkillDesign>
  </React.Fragment>
);

const paragraph = {
  width: "67%",
  margin: "0px auto",
};

const container = {
  padding: "48px 0px",
};
