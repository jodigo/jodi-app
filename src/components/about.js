import React, { Component } from 'react';
import { Grid, Cell, Card, CardText } from 'react-mdl';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CareerCards from './careercards'

class About extends Component {
  render() {
    return (
      <div id="page-container">
        <div className="about-grid-info">
            <h3>Hi, I'm Jodi.</h3> 
            <h5>Software engineer, full-stack developer. </h5>
            <br></br>
            <p>I'm originally from Bali, Indonesia, but these days I live in Vancouver, Canada.</p>
            <p>
              My favourite things to do are exploring food, playing basketball and shopping.
            </p>
            <a href="#" class="download-resume">View my resume</a>
        </div>
        <br></br>
        <br></br>

        <h5>Experiences</h5><hr></hr>
        <CareerCards
          start={"May 2019"}
          end={"August 2019"}
          title={"Junior Full Stack Developer"}
          location={"UBC (Health Research Pavilion)"}
          descriptions={["Implemented Natural Language Processing model for short text message analytic tools using predefined label and topic modelling with UBC Data Science Research Experts", 
          "Developed data visualization features to provide interactive informative display of processed data using D3.js, Plotly and Angular 6",
          "Redesigned the API and application architecture using Python, Docker and AWS from MS Azure to create partial-serverless microservice architecture which increases modularity and reduces costs"
          ]}
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
          techs={"AWS, Coffeescript, Google Bigquery, JIRA, PostgreSQL, Redis, Ruby on Rails 5, Sass"}
        />
    
        <div className="about-skills">
        <h5>Skills</h5><hr></hr>
          <div className="about-skills-container">
            <h6>HTML5 + CSS</h6> <ProgressBar now={90} label={`90%`}/>
            <h6>Javascript</h6> <ProgressBar now={82} label={`82%`}/>
            <h6>Python</h6> <ProgressBar now={80} label={`80%`}/>
            <h6>Ruby on Rails</h6> <ProgressBar now={80} label={`80%`}/>
            <h6>C/C++</h6> <ProgressBar now={75} label={`75%`}/>
            <h6>Basketball</h6> <ProgressBar now={100} label={`I should be in NBA %`}/>
          </div>
        </div>
        <div className="education">
          <h5>Education</h5><hr></hr>
          <div className="about-education-container">
            <p>
              <strong>University of British Columbia</strong> | Bachelor of Applied Science. Electrical Engineering, 2020.
            </p>
          </div>
        </div>
        <br></br>
        
      </div>
    );
  }
}

export default About;
