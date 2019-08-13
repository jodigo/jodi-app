import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class CareerCards extends Component {
    render() {
        var descriptions = this.props.descriptions.map(function(value, i){
            return (
                <li><p>{value}</p></li>
            );
        });
        return(
            <Grid className="about-grid-careers fix-margin">
                <Cell col={3}>
                    <p>{this.props.start} - {this.props.end}</p>
                </Cell>
                <Cell col={9}>
                    <p><strong>{this.props.title}</strong> at <a href={this.props.link}>{this.props.location}</a></p>
                    <ul>{descriptions}</ul>
                    <p>[{this.props.techs}]</p>
                </Cell>
            </Grid>
        );
    }
}

export default CareerCards