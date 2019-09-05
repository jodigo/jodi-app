import React, { useState } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className="App" className={darkMode ? "dark-mode" : "light-mode"}>
      <Layout className={darkMode ? "dark-mode" : "light-mode"}>
        <Header id="header-bar" className={darkMode ? "dark-mode" : "light-mode"} title=" " scroll>
          <Navigation className={darkMode ? "dark-mode" : "light-mode"}>
            <NavLink to="/" activeStyle={{ fontWeight: "bold", textDecoration: "line-through"}}><p>Home</p></NavLink>
            <NavLink to="/work" activeStyle={{ fontWeight: "bold", textDecoration: "line-through"}}><p>Work</p></NavLink>
            <NavLink to="/feed" activeStyle={{ fontWeight: "bold", textDecoration: "line-through"}}><p>Feed</p></NavLink>
            <NavLink to="/" activeStyle={{ fontWeight: "bold", textDecoration: "line-through"}}></NavLink>
            {/* <NavLink to="/contact" activeStyle={{ fontWeight: "bold", textDecoration: "line-through"}}><p>Contact</p></NavLink> */}
          </Navigation>
          <button id="toggle-light" className={darkMode ? "dark-mode big" : "light-mode big"} onClick={() => setDarkMode(prevMode => !prevMode)}>
            <svg width="100px" height="100px" viewBox="0 0 100 100">
                <g id="orb">
                  <circle id="disc" cx="20" cy="20" r="20"></circle>
                  <circle id="cut" cx="20" cy="20" r="20"></circle>
                </g>
                <path d="M51,21 L48,21 L48,4 L51,4 L51,21 Z M51.75,96 L48.75,96 L48.75,79 L51.75,79 L51.75,96 Z M4.5,51.5 L4.5,48.5 L21.5,48.5 L21.5,51.5 L4.5,51.5 Z M78.5,51.5 L78.5,48.5 L95.5,48.5 L95.5,51.5 L78.5,51.5 Z M17.0841793,19.0191036 L19.2054997,16.8977832 L31.226315,28.9185985 L29.1049946,31.0399189 L17.0841793,19.0191036 Z M69.4100811,71.3450054 L71.5314015,69.223685 L83.5522168,81.2445003 L81.4308964,83.3658207 L69.4100811,71.3450054 Z M18.5691036,83.3658207 L16.4477832,81.2445003 L28.4685985,69.223685 L30.5899189,71.3450054 L18.5691036,83.3658207 Z M70.8950054,31.0399189 L68.773685,28.9185985 L80.7945003,16.8977832 L82.9158207,19.0191036 L70.8950054,31.0399189 Z" id="rays" fill="rgb(var(--fg))"></path>
            </svg>
          </button>
        </Header>
        <button id="toggle-light" className={darkMode ? "dark-mode small" : "light-mode small"} onClick={() => setDarkMode(prevMode => !prevMode)}>
          <svg width="100px" height="100px" viewBox="0 0 100 100">
              <g id="orb">
                <circle id="disc" cx="20" cy="20" r="20"></circle>
                <circle id="cut" cx="20" cy="20" r="20"></circle>
              </g>
              <path d="M51,21 L48,21 L48,4 L51,4 L51,21 Z M51.75,96 L48.75,96 L48.75,79 L51.75,79 L51.75,96 Z M4.5,51.5 L4.5,48.5 L21.5,48.5 L21.5,51.5 L4.5,51.5 Z M78.5,51.5 L78.5,48.5 L95.5,48.5 L95.5,51.5 L78.5,51.5 Z M17.0841793,19.0191036 L19.2054997,16.8977832 L31.226315,28.9185985 L29.1049946,31.0399189 L17.0841793,19.0191036 Z M69.4100811,71.3450054 L71.5314015,69.223685 L83.5522168,81.2445003 L81.4308964,83.3658207 L69.4100811,71.3450054 Z M18.5691036,83.3658207 L16.4477832,81.2445003 L28.4685985,69.223685 L30.5899189,71.3450054 L18.5691036,83.3658207 Z M70.8950054,31.0399189 L68.773685,28.9185985 L80.7945003,16.8977832 L82.9158207,19.0191036 L70.8950054,31.0399189 Z" id="rays" fill="rgb(var(--fg))"></path>
          </svg>
        </button>
        <Drawer title="j o d i g o ;" id="header-bar">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/feed">Feed</Link>
            {/* <Link to="/contact">Contact</Link> */}
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
      </Layout>
    </div>
  )
}

