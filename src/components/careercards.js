import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class CareerCards extends Component {
    render() {
        var descriptions = this.props.descriptions.map(function(value, i){
            return (
                <p>{value}</p>
            );
        });
        return(
            <Grid className="about-grid-careers">
                <Cell col={4}>
                    <p>{this.props.start} - {this.props.end}</p>
                </Cell>
                <Cell col={8}>
                    <p><strong>{this.props.title}</strong> at {this.props.location}</p>
                    <ul>{descriptions}</ul>
                    <p>[{this.props.techs}]</p>
                </Cell>
            </Grid>
        );
    }
}

export default CareerCards