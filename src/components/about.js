import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <div className="about-grid-info">
            I'm Jodi Gunawan. A software engineer, full-stack developer, designer. 
            
            I'm originally from Bali, Indonesia but these days I live in Vancouver, Canada.
        </div>
        <Grid className="about-grid-careers">
          <Cell col={4}>job 1</Cell>
          <Cell col={4}>job 2</Cell>
          <Cell col={4}>job 3</Cell>
          <Cell col={4}>job 4</Cell>
        </Grid>
        <Grid className="about-grid-projects">
          <Cell col={4}>project 1</Cell>
          <Cell col={4}>project 2</Cell>
          <Cell col={4}>project 3</Cell>
          <Cell col={4}>project 4</Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
