import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/Giv4Gud.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://devpost.com/software/giv4gud" target="_blank">MLH Project: Giv4Gud</a></h3>
											<span>Expo Application</span>
											<p className="icon">
												<span><a href="https://github.com/MLH-Fellowship/giv4gud" target="_blank"><i className="icon-github" /></a></span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												{/* <span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/freeCourseX.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://devpost.com/software/freecoursex" target="_blank">MLH Project: freeCourseX</a></h3>
											<span>Developer Tools</span>
											<p className="icon">
												<span><a href="https://github.com/MLH-Fellowship/FreeCourseX" target="_blank"><i className="icon-github" /></a></span>
												{/* <span><a href="#"><i className="icon-share3" /></a></span> */}
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												{/* <span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/salaryio.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://devpost.com/software/salary-io-nuohk0" target="_blank">MLH Project: Salary.io</a></h3>
											<span>Machine Learning</span>
											<p className="icon">
												<span><a href="https://github.com/MLH-Fellowship/salary-io" target="_blank"><i className="icon-github" /></a></span>
												{/* <span><a href="#"><i className="icon-share3" /></a></span> */}
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												{/* <span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/greengeese.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://devpost.com/software/green-geese" target="_blank">MLH Project: Green-Geese</a></h3>
											<span>Unity, Game Development</span>
											<p className="icon">
												<span><a href="https://github.com/MLH-Fellowship/Green-Geese" target="_blank"><i className="icon-github" /></a></span>
												{/* <span><a href="#"><i className="icon-share3" /></a></span> */}
												<span><a href="https://zzranger.github.io/Green-Geese-Demo/" target="_blank"><i className="icon-eye" /> Play It!</a></span>
												{/* <span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/bestgeese.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://devpost.com/software/best-geese-vrycep">MLH Project: Best-Geese</a></h3>
											<span>Education</span>
											<p className="icon">
												<span><a href="https://github.com/MLH-Fellowship/Best-Geese" target="_blank"><i className="icon-github" /></a></span>
												{/* <span><a href="#"><i className="icon-share3" /></a></span> */}
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												{/* <span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/stars.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://gprmarquez.github.io/Random-Quote/" target="_blank">Random Quote Generator</a></h3>
											<span>Vanilla HTML, CSS, JavaScript</span>
											<p className="icon">
												<span><a href="https://github.com/gprmarquez/Random-Quote" target="_blank"><i className="icon-github" /></a></span>
												{/* <span><a href="#"><i className="icon-share3" /></a></span> */}
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												{/* <span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/gprmarquez" target="_blank" className="btn btn-primary btn-lg btn-load-more">To Github! <i className="icon-github" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
