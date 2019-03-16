import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header className="header-background" title=" " scroll>
              <Navigation>
                <Link to="/">home</Link>
                <Link to="/career">career</Link>
                <Link to="/resume">resume</Link>
                <Link to="/contact">contact</Link>
              </Navigation>
            </Header>
            <Drawer title="">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
