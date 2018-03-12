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
        <div className="text-white text-center"
        style={{padding: '50px 0px 30px'}}>
          <div className="navbar-brand">
            <div className="row">
              <div className="col">
                <ReactRevealText show={this.state.show}
                style={{color: 'rgb(13, 168, 240)', fontSize: "24px", lineHeight: "36px"}}
                className="d-inline-block">
                C
                </ReactRevealText>
                <ReactRevealText show={this.state.show}
                style={{color: "white", fontSize: "24px", lineHeight: "36px"}}
                className="d-inline-block">
                AMERON 
                </ReactRevealText>
              </div>
              <div className="col">
                <ReactRevealText show={this.state.show}
                style={{color: 'rgb(13, 168, 240)', fontSize: "24px", lineHeight: "36px"}}
                className="d-inline-block">
                P
                </ReactRevealText>
                <ReactRevealText show={this.state.show}
                style={{color: "white", fontSize: "24px", lineHeight: "36px"}}
                className="d-inline-block">
                ELINA 
                </ReactRevealText>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;