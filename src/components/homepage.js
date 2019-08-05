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

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 12000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect ? <Redirect to="/about"/> : 
    (
      <div style={{ width: '100%', margin: 'auto' }}>
        <div className="homepage">
          <div className="homepage-banner">
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
          </div>   
        </div>
      </div>
    );
  }
}

