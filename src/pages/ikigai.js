import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Divider, List } from 'antd'

import Wrapper from '../components/layout'
import SEO from '../components/seo'

const love = [
  'Checking out Great Products',
  'Eating Good Food',
  'Feeling Inspired by Creative Works',
  'Following Startups',
  'Innovative Products',
  'Listening to Good Leaders',
  'Making digital products in Web and Mobile',
  'Sharing skills to people',
  'Your Great Idea',
];

const good = [
  'Branding',
  'Cooking',
  'Front-End Development',
  'Finding New Tech-Trends',
  'Product Design',
  'Singing',
  'User Interface Design',
  'User Experience Design',
];

const paid = [
  'By Branding a company',
  'Creating user interfaces for web and mobile',
  'Coding Websites'
];

const need = [
  'Discipline',
  'Empathy',
  'Essentialism',
  'Good Design',
  'To know the Ikigai.'
];


const IkigaiPage = () => (
  <Wrapper>
    <SEO title="Ikigai" keywords={['gatsby', 'application', 'react']} />
    <Row className="heading" gutter={16}>
      <Col md={18} xs={24}>
        <h2 class="header">Ikigai, The reason for being.</h2>
        <p class="sub-header">Value in one's life or the things that make one's life worthwhile. <a href="https://www.youtube.com/watch?v=pk-PcJS2QaU">How to do it? Watch this.</a></p>
      </Col>
    </Row>

    <Row gutter={16} className="listed-row">
      <Col md={12} xs={24}>
        <h4>What I love?</h4>
        <Divider />
        <List
          dataSource={love}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Col>
      <Col md={12} xs={24}>
        <h4>What I’m good at?</h4>
        <Divider />
        <List
          dataSource={good}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Col>
    </Row>
    <Row gutter={16} className="listed-row">
      <Col md={12} xs={24}>
        <h4>What the world needs?</h4>
        <Divider />
        <List
          dataSource={need}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Col>
      <Col md={12} xs={24}>
        <h4>What can be paid for?</h4>
        <Divider />
        <List
          dataSource={paid}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Col>
    </Row>

    <Row className="closing" gutter={16}>
      <Col md={24} xs={24}>
        <h3>To "Influence, Contribute and Create great products".</h3>
        <p>I feel that's my Ikigai. </p>
      </Col>
    </Row>
  </Wrapper>
)

export default IkigaiPage
