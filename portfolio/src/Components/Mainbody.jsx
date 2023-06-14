import React from "react";
import styled from "styled-components";
import "./mainbody.css";
import { Carousal } from "./Carousel";

const Container = styled.div`
width:100%;
margin-top:3rem;
`;

const Mainbody = () => {
  return (
    <Container>
      <div className="container1">
        <div className="child-div">
          <h1 className="name">Sitesh kumar Tandan</h1>
          <h3 className="des">Full Stack Developer</h3>
        </div>
        <img className="profile-photo" src="profile.png" alt="img" />
      </div>
      <div className="container2">
        <div className="about">
          <div className="heading">About Me</div>
        </div>
        <div className="carrier">
          <div className="heading">Carrier Objectiv</div>
        </div>
        <div className="skill">
          <div className="heading">Skill's</div>
        </div>
        <div className="acadmi">
          <div className="heading">Acadmic Detail's</div>
        </div>
      </div>
      <div className="container3">
        <h2>Intership & Training Certificates</h2>
      </div>
      <Carousal/>
    </Container>
  );
}

export default Mainbody