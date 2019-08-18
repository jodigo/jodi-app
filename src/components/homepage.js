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
    return this.state.redirect ? <Redirect to="/about"/> : 
    (
      <div style={{ width: '100%', margin: 'auto' }}>
        <div className="homepage container">
          <div className="homepage-banner row">
            <Link to="/about" onClick={() => { }}>
              <h1 className="homepage-title">
                <Typist 
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
                </Typist>
              </h1>
            </Link>
            <div className="homepage-column">
              <div className="homepage-info">
                <h3>Hi, I'm Jodi.</h3>
                <h6>I was born in Bali, Indonesia.</h6>
                <h6>I moved to Vancouver, Canada.</h6>
                <h6>I'm now a student at UBC.</h6>
                <h6>I'm currently looking for a full-time software engineer position.</h6>
                <h6>I play basketball whenever I am not working/studying.</h6>
                <h6>. .</h6>
                <h6>. </h6>
              </div>
              <div className="homepage-img">
                <img className='pp-home' src={require('../assets/pp2.png')}></img>
              </div>
            </div>
          </div>   
        </div>
      </div>
    );
  }
}

