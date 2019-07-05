import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 1 };
  }
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header className="header-bar" title=" " scroll>
              <Navigation>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/feed">feed</Link>
                <Link to="/contact">contact</Link>
              </Navigation>
            </Header>
            <Drawer title="">
              <Navigation>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/feed">feed</Link>
                <Link to="/contact">contact</Link>
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
