import React, { Component } from 'react';
import Typist from 'react-typist';

export default class HomePage extends Component {
  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <div className="homepage">
          <div className="homepage-banner">
            <h1 className="homepage-title" onClick={() => { }}>
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
          </div>   
        </div>
      </div>
    );
  }
}

