import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="page-container">
        <h1>contact;</h1>
        <div className="contact-icons">
          <div>
            <p>Vancouver, Canada</p>
          </div>
          <div>
            <p><a href="mailto:jgunawan.1098@gmail.com">jgunawan.1098@gmail.com</a></p>
          </div>
          <div>
            <p>
            <a href="https://www.instagram.com/jodigunawan/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            /
            <a href="https://www.linkedin.com/in/jodi-gunawan/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            / 
            <a href="https://github.com/jodigo" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
