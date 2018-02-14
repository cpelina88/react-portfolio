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
          <div className="col-md">
          </div>
          <div className="col-md text-white">
            <h1>Cameron Pelina</h1>
            <h4>Junior Web Developer</h4>
            
          </div>
        </div>
      </div>
    )
  }
} 

export default Home;