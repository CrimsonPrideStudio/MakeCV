import React from "react";
import styled from "styled-components";
import { RiSearchEyeLine } from "react-icons/ri";
import "./nav.css";
const Wraper = styled.div`
  width: 100%;
  min-height: 45px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const Navbar = () => {
  function search() {
    alert("success");
  }

  return (
    <Wraper>
      <a className="main-title" href="home.html">
        Port<span className="danger">Folio</span>
      </a>
      <div className="box">
        <div className="search-box">
          <button onClick={search} className="btn-search">
            <RiSearchEyeLine />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </div>
      <a className="bar1 bar" href="links">
        Links
      </a>
      <a className="bar2 bar" href="projects">
        Projects
      </a>
      <a className="bar3 bar" href="about.html">
        About
      </a>
    </Wraper>
  );
};

export default Navbar;