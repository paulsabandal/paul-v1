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
        <Row>
          <Col span={2}><Avatar shape="square" src={LinkedIn}/></Col>
          <Col span={2}><Avatar shape="square" src={Dribbble}/></Col>
          <Col span={2}><Avatar shape="square" src={Github}/></Col>
          <Col span={2}><Avatar shape="square" src={Twitter}/></Col>
        </Row>
        <img src={WaterMark} class="watermark" alt="Watermark of Paul" />
      </div>
    )
  }
}

export default Footer

