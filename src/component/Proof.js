import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import airbnb from "../assets/logos/airbnb.svg";
import basecamp from "../assets/logos/basecamp.svg";
import dropbox from "../assets/logos/dropbox.svg";
import evernote from "../assets/logos/evernote.svg";
import google from "../assets/logos/google.svg";
import spotify from "../assets/logos/spotify.svg";

export const Proof = () => (
  <React.Fragment>
    <Container className="py-5 bg-white">
      <h3 className="text-center mb-5 font-weigth-bold">
        Great Clients I've worked with
      </h3>
      <div className="row mb-5 logos">
        <div className="logo px-3 col-6 col-md-4 col-lg-2 mr-0 px-md-5 px-lg-4">
          <a className="logo-link" href="/">
            <img src={airbnb} className="img-fluid svg-ie-fix" />
          </a>
        </div>
        <div className="logo px-3 col-6 col-md-4 col-lg-2 mr-0 px-md-5 px-lg-4">
          <a className="logo-link" href="/">
            <img src={basecamp} className="img-fluid svg-ie-fix" />
          </a>
        </div>
        <div className="logo px-3 col-6 col-md-4 col-lg-2 mr-0 px-md-5 px-lg-4">
          <a className="logo-link" href="/">
            <img src={dropbox} className="img-fluid svg-ie-fix" />
          </a>
        </div>
        <div className="logo px-3 col-6 col-md-4 col-lg-2 mr-0 px-md-5 px-lg-4">
          <a className="logo-link" href="/">
            <img src={evernote} className="img-fluid svg-ie-fix" />
          </a>
        </div>
        <div className="logo px-3 col-6 col-md-4 col-lg-2 mr-0 px-md-5 px-lg-4">
          <a className="logo-link" href="/">
            <img src={google} className="img-fluid svg-ie-fix" />
          </a>
        </div>
        <div className="logo px-3 col-6 col-md-4 col-lg-2 mr-0 px-md-5 px-lg-4">
          <a className="logo-link" href="/">
            <img src={spotify} className="img-fluid svg-ie-fix" />
          </a>
        </div>
      </div>
    </Container>
    <Container fluid></Container>
  </React.Fragment>
);
