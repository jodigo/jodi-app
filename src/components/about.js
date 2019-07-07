import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, ProgressBar } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div id="page-container">
        <div className="about-grid-info">
            <h3>Hi, I'm Jodi.</h3> 
            <h5>Software engineer, full-stack developer. </h5>
            
            <p>I'm originally from Bali, Indonesia but these days I live in Vancouver, Canada.</p>
        </div>
        <Grid className="about-grid-careers">
          <Card shadow={0} style={{width: '300px', margin: '5px', padding: 'auto'}}>
            <CardText>
              Junior Full Stack Developer
            </CardText>
          </Card>
          <Card shadow={0} style={{width: '300px', margin: '5px', padding: 'auto'}}>
            <CardText>
              Software Developer
            </CardText>
          </Card>
          <Card shadow={0} style={{width: '300px', margin: '5px', padding: 'auto'}}>
            <CardText>
              Learning Tech Rover
            </CardText>
          </Card>
          <Card shadow={0} style={{width: '300px', margin: '5px', padding: 'auto'}}>
            <CardText>
              Computer Programmer
            </CardText>
          </Card>
        </Grid>
        <Grid className="about-grid-projects">
          <Cell col={4}>project 1</Cell>
          <Cell col={4}>project 2</Cell>
          <Cell col={4}>project 3</Cell>
          <Cell col={4}>project 4</Cell>
        </Grid>
        <div className="about-skills">
          <div className="about-skills-container">
            <h6>HTML</h6>
            <ProgressBar progress={33} label={`33%`} buffer={95} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
