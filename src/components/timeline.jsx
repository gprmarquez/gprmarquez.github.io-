import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Career at Caltech <span>2018-Present</span></h2>
                        <p>
                          My work at Caltech started off as an 8-week intern for the Council for the Advancement and Support of Education (CASE). I was tasked to automate the business process of routing gift agreements for approvals using tools that Caltech already had, which included an Office 365 package. I mainly used Microsoft Flow (now Power Automate) and connected it to their customized intranet on SharePoint, interacting with their lists, forms, and libraries. My favorite part was that they gave me the freedom to execute the project through every stage, from planning and development, to testing, training, and deployment!
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Major League Hacking (MLH) Fellowship <span>Oct. 2020 - Dec. 2020</span></h2>
                        <p>
                          I was able to dive into collaboration and learning through the MLH Fellowship. I was immediately immersed in new tools and techniques as we were tasked to develop tools and applications in 2-week sprints with various themes and focuses, such as education, social good, and gaming.
                          <br></br>
                          This is where I conveyed my adaptiveness and willingness to learn through the projects where I utilized React, Angular, Unity, for the first time. In the end, I graduated with podmates that I would love to work with again, and projects that I can always go back to and expand.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>University of California, Riverside <span>2014-2018</span></h2>
                        <p>
                          I moved from Gaithersburg, MD as a first generation college student. While completing a degree in Business Administration with a focus on Management, I worked with multiple facets of higher education:
                          <ul>
                            <li>Honed my speaking skills as a campus ambassdor with Undergraduate Admissions</li>
                            <li>Built rapport with my community through guiding incoming students and families as an orientation leader in student life</li>
                            <li>Connected with UCR Alumni as the Alumni & Constituent Relation's social media intern</li>
                            <li>Ate a lot of food throughout my work as a cook & cashier in the Dining Department</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
