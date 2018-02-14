import React, { Component } from 'react';
import computer from '../images/computer.jpg';
import ReactRevealText from 'react-reveal-text';


class Home extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md text-white">
            <p>I am an aspiring web developer with a passion for learning and using technology.  I enjoy problem solving and am a quick learner who can pick up new ideas and concepts quickly.  I love facing challenges and hurdles while  offering my personal experience as an artist/web developer in order to make projects that I can take pride in. </p>
          </div>
          <div className="col-md text-white">
            <h3 className="accent d-inline-block">P</h3><h3 className="d-inline-block">ROJE</h3><h3 className="accent d-inline-block">C</h3><h3 className="d-inline-block">TS</h3>
            
          </div>
        </div>
      </div>
    )
  }
} 

export default Home;