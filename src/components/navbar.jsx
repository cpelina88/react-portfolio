import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';

class NavBar extends Component {
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
      <div>
        <div className="navbar" className="text-white text-center"
        style={{padding: '50px 0px'}}>
          <p className="navbar-brand">
            <ReactRevealText show={this.state.show}
            style={{color: 'rgb(13, 168, 240)', fontSize: "18px", lineHeight: "36px"}}
            className="d-inline-block">
            C
            </ReactRevealText>
            <ReactRevealText show={this.state.show}
            style={{color: "white", fontSize: "18px", lineHeight: "36px"}}
            className="d-inline-block">
            AMERON 
            </ReactRevealText>
            <ReactRevealText show={this.state.show}
            style={{color: 'rgb(13, 168, 240)', fontSize: "18px", lineHeight: "36px"}}
            className="d-inline-block">
            P
            </ReactRevealText>
            <ReactRevealText show={this.state.show}
            style={{color: "white", fontSize: "18px", lineHeight: "36px"}}
            className="d-inline-block">
            ELINA 
            </ReactRevealText>
          </p>
        </div>
      </div>
    )
  }
}

export default NavBar;