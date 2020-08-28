import React from "react";
import { Nav } from "react-bootstrap";

export const NavigationBar = () => (
  <React.Fragment>
    <Nav
      className="justify-content-center align-items-center"
      activeKey="/home"
      style={navStyle}
    >
      <Nav.Item>
        <Nav.Link href="/home">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects">PROJECTS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/blog">BLOG</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/resume">RESUME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">CONTACT</Nav.Link>
      </Nav.Item>
    </Nav>
  </React.Fragment>
);

const navStyle = {
  backgroundColor: "#0077B6",
  color: "#fff",
  height: "65px",
};
