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
                    <p><a href="mailto:jgunawan.1098@gmail.com">jgunawan.1998 (at) gmail (dot) com</a></p>
                  </div>
                  <div>
                    <p>
                    <a href="https://www.instagram.com/jodigunawan/" target="_blank" rel="noopener noreferrer">
                      Instagram 
                    </a>
                    &nbsp;/&nbsp;
                    <a href="https://www.linkedin.com/in/jodi-gunawan/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    &nbsp;/&nbsp;
                    <a href="https://github.com/jodigo" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                    </p>
                  </div>
                </div>
                <a href="https://www.dropbox.com/s/bccizshq2jqgirt/Jodi%20Gunawan%20Resume%20-%201%20Page%202020.pdf?dl=0" download target="_blank" className="download-resume">
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
          descriptions={["Redesigned the API and architecture using Python, AWS, Microsoft Azure and Docker to create partial serverless microservice architecture which increases modularity and reduces costs by 50%",
          "Developed a dashboard using D3.js and React and a data visualization feature using ChartJS and Angular to provide interactive informative display of processed conversational data in 2 weeks duration",
          "Implemented Natural Language Processing model for short text message analytic tools using predefined label, topic modelling and sentiment analysis with UBC Data Science Research Experts"
          ]}
          link={"https://www.msfhr.org/smart-text-analytic-tools-stat-analysis-patient-centred-communications-strengthen-health-systems-bc"}
          techs={"Angular 6, React, AWS(S3, Lambda, Elastic BeanStalk, ECR), Microsoft Azure, Docker, Flask, PostgreSQL, Scikit Learn, Tensorflow"}
        />
        <CareerCards
          start={"January 2018"}
          end={"August 2018"}
          title={"Software Developer"}
          location={"Glacier Media Inc - Real Estate Wire"}
          descriptions={["Developed <a href='https://www.rew.ca/news'>real estate news site</a> stored in AWS S3 using JS and search results localization using Rails which boosted user retention by 100%",
          "Implemented an event tracking system using Google Bigquery to analyze the user pattern behavior for website data analytics",
          "Migrated a legacy third party CMS Polopoly via a database design and import using PostgreSQL",
          "Participated in biweekly sprints in Agile and Kanban culture with JIRA ticketing system"
          ]}
          link={"https://www.rew.ca/"}
          techs={"AWS, Coffeescript, Google Bigquery, Heroku, JIRA, PostgreSQL, Redis, Ruby on Rails 5, Sass"}
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
                  <li><p>HTML5 + CSS3</p></li>
                  <li><p>Javascript/jQuery</p></li>
                  <li><p>Typescript</p></li>
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
                  <li><p>React.js</p></li>
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

        <div className="education container">
          <h5>Education</h5><hr></hr>
          <div className="about-education-container">
            <p>
              <strong>University of British Columbia</strong> | Bachelor of Applied Science. Electrical Engineering, 2020.
            </p>
          </div>	     
        </div>

        <br></br> 

        <div className="about-skills container">
          <h5>Projects</h5><hr></hr>
          <div className="col-sm">
            <h6 className="about-skills-subtitle">UBC GISAU: <a href="https://www.gisaubc.com" target="_blank">gisaubc.com</a></h6>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
