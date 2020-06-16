import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link, Redirect } from 'react-router-dom';

export default class HomePage extends Component {
  state = {
    renderMsg: false,
    redirect: false
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  // componentDidMount() {
  //   this.id = setTimeout(() => this.setState({ redirect: true }), 12000)
  // }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect ? <Redirect to="/work"/> : 
    (
      <div style={{ width: '100%', margin: 'auto' }}>
        <div className="homepage container">
          <div className="homepage-banner row">
            <Link to="/work" onClick={() => { }}>
              <h1 className="homepage-title">
                {/* <Typist 
                  avgTypingDelay={150}
                  startDelay={1000}
                  onTypingDone={this.onHeaderTyped}
                  cursor={{ hideWhenDone: true }}>
                  jodigunawan
                  <Typist.Backspace count={7} delay={1700} />
                  go;
                  <Typist.Delay delay={800}/>
                  )
                  <Typist.Backspace count={1} delay={1700} />
                </Typist> */}
              </h1>
            </Link>
            <div className="homepage-column container">
              <div className="homepage-img mobile">
                <img className='pp-home' src={require('../assets/home.png')}></img>
              </div>
              <div className="homepage-info">
                <h2>Hi, I'm Jodi.</h2>
                <h6>I was born in Bali, Indonesia.</h6>
                <h6>I moved to Vancouver, Canada.</h6>
                <h6>I am 2020 <a href='https://www.ubc.ca/' target='_blank' className='link' rel="noopener noreferrer">UBC graduate.</a></h6>
                <h6>I am currently a software engineer <a href='https://www.linkedin.com/in/jodi-gunawan/' target='_blank' className='link' rel="noopener noreferrer">working</a> at Telus. </h6>
                <h6>I play basketball and go on food-venture whenever I am not working/studying.</h6>
                <br></br>
                <br></br>
                <h6>Please feel free to contact. Would be lovely to hear from you: </h6>
                <h6 style={{color: '#C5394C'}}><a href="mailto:jgunawan.1098@gmail.com"> jgunawan.1098 (at) gmail (dot) com</a></h6>
              </div>
              <div className="homepage-img desktop">
                <img className='pp-home' src={require('../assets/home.png')}></img>
              </div>
            </div>
          </div>   
        </div>
      </div>
    );
  }
}

