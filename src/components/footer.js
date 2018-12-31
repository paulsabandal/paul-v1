import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'
import Dribbble from '../images/social/logo-dribbble.svg';
import Github from '../images/social/logo-github.svg';
import LinkedIn from '../images/social/logo-linkedin.svg';
import Twitter from '../images/social/logo-twitter.svg';
import WaterMark from '../images/logo-watermark.svg';
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <Row className="listed-row">
          <Col md={2} xs={6}><a href="https://www.linkedin.com/in/paulsabandal/" target="_blank"><Avatar shape="square" src={LinkedIn}/></a></Col>
          <Col md={2} xs={6}><a href="https://dribbble.com/paulwithjames" target="_blank"><Avatar shape="square" src={Dribbble}/></a></Col>
          <Col md={2} xs={6}><a href="https://github.com/paulsabandal/" target="_blank"><Avatar shape="square" src={Github}/></a></Col>
          <Col md={2} xs={6}><a href="https://twitter.com/paulwthjames" target="_blank"><Avatar shape="square" src={Twitter}/></a></Col>
        </Row>
        <img src={WaterMark} class="watermark" alt="Watermark of Paul" />
      </div>
    )
  }
}

export default Footer

