import React from 'react'
import { Link } from 'gatsby'
import { withPrefix } from 'gatsby'
import { Row, Col, Card } from 'antd'

import Wrapper from '../components/layout'
import SEO from '../components/seo'
import htmlFile from 'raw-loader!./../docs/pica/merchant.html';
import Figma from '../images/works/logo/figma.svg';
import AQWIRE from '../images/works/logo/aqwire.svg';
import PICA from '../images/works/logo/pica.svg';
import Qwikwire from '../images/works/logo/qwikwire.svg';
import RisingSeeds from '../images/works/logo/rising-seeds.svg';

import FigmaScreen from '../images/works/screens/figma.png';
import AQWIREScreen from '../images/works/screens/aqwire.png';
import PICAScreen from '../images/works/screens/pica.png';
import QwikwireScreen from '../images/works/screens/qwikwire.png';
import RisingScreen from '../images/works/screens/rising-seeds.png';

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" keywords={['paul james sabandal', 'application', 'react']} />
    <Row className="heading" gutter={16}>
      <Col md={18} xs={24}>
        <h2 class="header">Work, what keeps me busy and going.</h2>
        <p class="sub-header">Picked works that I’ve done so far.</p>
      </Col>
    </Row>

    <Row gutter={16} className="listed-row">
      <Col md={12} xs={24}>
        <a className="work" href="https://www.figma.com/resources/assets/value-proposition-canvas/" target="_blank">
          <Card>
            <img src={Figma} className="logo" />
            <p>Collaborative template for setting up Value Proposition Canvas in Figma.</p>
            <img src={FigmaScreen} className="screen" />
          </Card>
        </a>
      </Col>
      <Col md={12} xs={24}>
        <a className="work" href="https://beta.aqwire.io/" target="_blank">
          <Card>
            <img src={AQWIRE} className="logo" />
            <p>Marketplace that can handle an end to end property acquisition, seamlessly.</p>
            <img src={AQWIREScreen} className="screen" />
          </Card>
        </a>
      </Col>
    </Row>

    <Row gutter={16} className="listed-row">
      <Col md={12} xs={24}>
        <a className="work" href={withPrefix(htmlFile)} target="_blank">
          <Card>
            <img src={PICA} className="logo" />
            <p>Acquire and Retain Loyal Customers through offering customizable incentives.</p>
            <img src={PICAScreen} className="screen" />
          </Card>
        </a>
      </Col>
      <Col md={12} xs={24}>
        <a className="work" href="https://qwikwire.com/" target="_blank">
          <Card>
            <img src={Qwikwire} className="logo" />
            <p>Helping real estate developers to collect cross-border payments from there clients.</p>
            <img src={QwikwireScreen} className="screen" />
          </Card>
        </a>
      </Col>
    </Row>
    <Row gutter={16} className="listed-row">
      <Col md={12} xs={24}>
        <a className="work" href="https://www.figma.com/file/UWXnhWh4Wsr7Y8ltPOoYOHRj/Rising-Seeds?node-id=10%3A0">
          <Card>
            <img src={RisingSeeds} className="work-logo" />
            <p>A community-driven platform that curates crypto-related products, projects, and information.</p>
            <img src={RisingScreen} className="screen" />
          </Card>
        </a>
      </Col>
    </Row>
  </Wrapper>
)

export default IndexPage
