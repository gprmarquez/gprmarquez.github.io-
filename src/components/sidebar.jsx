import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Gerald Marquez</a></h1>
              <span className="email"><i className="icon-mail"></i> gprmarquez@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/gerald-marquez/" target="_blank"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://twitter.com/GerForMayor" target="_blank"><i className="icon-twitter2" /></a></li>
                <li><a href="https://github.com/gprmarquez" target="_blank"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Always Learning :)
              </small></p>
              <p><small>
              Thanks <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/" target="_blank" rel="noopener noreferrer">Dhruv Barochiya</a> for awesome layout! 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
