import React, { Component } from 'react';
import CareerCards from './careercards'

class About extends Component {
  render() {
    return (
      <div id="page-container">
        <div>
          <div className="about-grid-info">
              <img className="pp"></img>
              <div>
              <h1>about;</h1>
                <div className="contact-icons">
                  <div>
                    <p>Vancouver, Canada</p>
                  </div>
                  <div>
                    <p><a href="mailto:jgunawan.1098@gmail.com">jgunawan.1098@gmail.com</a></p>
                  </div>
                  <div>
                    <p>
                    <a href="https://www.instagram.com/jodigunawan/" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                    /
                    <a href="https://www.linkedin.com/in/jodi-gunawan/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    / 
                    <a href="https://github.com/jodigo" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                    </p>
                  </div>
                </div>
                <a href="https://docs.google.com/document/d/1zOlTHWt7R2cu_RT23C19l43VKWKZgfR-AOsio7vGjIQ/edit?usp=sharing" download className="download-resume">
                  Resume
                </a>
              </div> 
          </div>
          
        </div>
        <br></br>

        <h5>Experiences</h5><hr></hr>
        <CareerCards
          start={"May 2019"}
          end={"August 2019"}
          title={"Junior Full Stack Developer"}
          location={"UBC (Health Research Pavilion)"}
          descriptions={["Implemented Natural Language Processing model for short text message analytic tools using predefined label and topic modelling with UBC Data Science Research Experts", 
          "Developed data visualization features to provide interactive informative display of processed data using D3.js, Plotly and Angular 6",
          "Redesigned the API and application architecture using Python, AWS, MS Azure and Docker, to create partial-serverless microservice architecture which increases modularity and reduces costs"
          ]}
          link={"https://www.msfhr.org/smart-text-analytic-tools-stat-analysis-patient-centred-communications-strengthen-health-systems-bc"}
          techs={"Angular 6, React, AWS(S3, Blob, Lambda, Elastic BeanStalk, ECR), Microsoft Azure, Docker, Flask, PostgreSQL, Scikit Learn, Tensorflow"}
        />
        <CareerCards
          start={"January 2018"}
          end={"August 2018"}
          title={"Software Developer"}
          location={"Glacier Media Inc - Real Estate Wire"}
          descriptions={["Integrated an Event Tracking system to track the user activity using Google Bigquery for data analytics",
          "Migrated database from third party CMS Polopoly to the local PostgreSQL database",
          "Developed real estate news site using Coffeescript and AWS and search results localization which increased page traffic by 20%",
          "Participated in bi-weekly sprints and kanban flow in agile culture with JIRA ticketing system"
          ]}
          link={"https://www.rew.ca/news"}
          techs={"AWS, Coffeescript, Google Bigquery, JIRA, PostgreSQL, Redis, Ruby on Rails 5, Sass"}
        />
        <CareerCards
          start={"September 2017"}
          end={"December 2017"}
          title={"Learning Technology Rover"}
          location={"UBC Applied Science"}
          descriptions={["Utilized Blackboard - Connect to managing students’ grades database and ensuring bugless course content by testing",
          "Provided initial face-to-face and remote learning technology support for instructors and faculty members",
          "Teaching assistant for the first year courses: APSC100 and APSC101"
          ]}
          techs={"HTML5, CSS, WordPress, Connect, Python"}
        />
    
        <div className="about-skills container">
          <h5>Skills</h5><hr></hr>
          <div className="about-skills-container row">
            <div className="col-sm">
              <h6 className="about-skills-subtitle">Languages</h6>
              <p>
                <ul>
                  <li><p>HTML5 + CSS</p></li>
                  <li><p>Javascript</p></li>
                  <li><p>Python</p></li>
                  <li><p>Ruby on Rails</p></li>
                  <li><p>C/C++</p></li>
                  <li><p>XML</p></li>
                  <li><p>SQL</p></li>
                  <li><p>Git</p></li>
                  <li><p>System Verilog</p></li>
                  <li><p>Assembly</p></li>
                </ul>     
              </p>         
            </div>
            <div className="col-sm">
              <h6 className="about-skills-subtitle">Frameworks + Libraries</h6>
              <p>
                <ul>
                  <li><p>React</p></li>
                  <li><p>Angular</p></li>
                  <li><p>Flask</p></li>
                  <li><p>Amazon Web Services (AWS)</p></li>
                  <li><p>Microsoft Azure</p></li>
                  <li><p>PostgreSQL</p></li>
                  <li><p>NoSQL</p></li>
                  <li><p>Docker</p></li>
                  <li><p>Redis</p></li>
                  <li><p>ROS</p></li>
                  <li><p>Sass</p></li>
                  <li><p>Tensorflow</p></li>
                </ul>     
              </p>   
            </div>
            <div className="col-sm">
              <h6 className="about-skills-subtitle">Others</h6>
              <ul>
                <li><p>Agile Methodology</p></li>
                <li><p>Kanban</p></li>
                <li><p>Scrum</p></li>
                <li><p>UI Design</p></li>
                <li><p>Machine Learning</p></li>
              </ul>
            </div>
          </div>
        </div>
        
        <br></br>
        <div className="about-skills container">
          <h5>Interests</h5><hr></hr>
          <div className="col-sm">
            <h6 className="about-skills-subtitle">Basketball</h6>
            <h6 className="about-skills-subtitle">Classical Guitar</h6>
            <h6 className="about-skills-subtitle">Food</h6>
            <h6 className="about-skills-subtitle">Streetwear</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
