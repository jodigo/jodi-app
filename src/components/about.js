import React, { Component } from 'react';
import CareerCards from './careercards'

class About extends Component {
  render() {
    return (
      <div id="page-container">
        <div>
          <div className="about-grid-info">
              <img className="pp" alt="profilepicture"></img>
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
                <a href="#" className="download-resume">Download</a>
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
          techs={"Angular 6, React, Microsoft Azure, Docker, PostgreSQL, Scikit Learn, Tensorflow"}
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
    
        <div className="about-skills">
        <h5>Skills</h5><hr></hr>
          <div className="about-skills-container">
            <p className="ul_top_hypers">
              HTML5,
              Javascript,
              Python,
              Ruby on Rails,
              C/C++,
              XML,
              SQL, 
              Git,
              AWS, Angular, Docker, Microsoft Azure, NoSQL, PostgreSQL, React, Redis, ROS, Sass, Tensorflow,
              Basketball
            </p>
          </div>
        </div>
        
        <br></br>
        
      </div>
    );
  }
}

export default About;
