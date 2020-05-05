import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (

      <React.Fragment>

        <header id="home">

          <nav class="navbar navbar-expand-md bg-dark navbar-dark">
 
            <a className="navbar-brand" href="#">Navbar</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="current" className="nav-link" href="#">Home</a>
                </li>
                <li className="smoothscroll" className="nav-item">
                  <a className="smoothscroll" className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="smoothscroll" class="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>

          </nav>
         
          <div className="row banner">
            <div className="banner-text">

              <h1 className="heading"><span className="react">React</span> <span className="dev">Mobile-Dev| </span> <span className="origin">Origin</span><span className="ldp">(2020, Lockdown)</span> <span className="project">.Project(<span className="dev">design</span>)</span> </h1>
           
                <h3 className="sub-heading">
                Motion Design | <a className="smoothscroll" href="#about">Collaboration</a> | Web Development | <span>Origin 2020</span> | 
                Design Thinking | Problem Solving | <span>Mentorship</span> | Partnership.
                </h3>
              <hr />
          
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
};