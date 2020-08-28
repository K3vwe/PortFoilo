import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import profile1 from "../assets/profile1.JPG";

export const Header = () => (
  <React.Fragment>
    <Jumbo fluid style={headingStyle}>
      <Container style={header}>
        <div style={{ marginRight: "15px" }}>
          <img src={profile1} style={profileImg} alt="profile-img" />
        </div>
        <div style={{ width: "70%" }}>
          <h1 style={{ fontSize: "22px" }}>Hello, my name is</h1>
          <h1>ONOWHO KEVWE</h1>
          <p>
            I'm a full-stack developer specialised in frontend and backend
            development for complex scalable web apps. I write about web
            development on my blog and regularly speak at various web
            conferences and meetups. Want to know how I may help your project?
            Check out my project case studies and resume.
          </p>
          <Button variant="primary">Primary</Button>
        </div>
      </Container>
    </Jumbo>
  </React.Fragment>
);

const headingStyle = {
  heigth: "40vh",
  backgroundColor: "#00A8E8",
  color: "#fff",
  maarginBottom: "none",
};

const profileImg = {
  width: "250px",
  height: "250px",
};

const header = {
  display: "flex",
};
