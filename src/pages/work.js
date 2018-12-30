import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'antd'

import Wrapper from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Row className="heading" gutter={16}>
      <Col span={18}>
        <h2 class="header">Ikigai, The reason for being.</h2>
        <p class="sub-header">Let me tell you more about me using the Ikigai Format.</p>
      </Col>
    </Row>

    <Row gutter={16}>
      <Col span={18}>
        <p>One of those humans that shouts “Design is not how it looks like, it’s how it works!”</p>
        <p>I'm a Product Designer based from Manila, Philippines. Crafting experiences using data gathered from users and market research, digitally.</p>
        <p>Currently working as the Head of Product Development of Qwikwire, One of the rising startups here in the Philippines. We do cross-border payments for real-estate.</p>
        <p>I'm helping to organize meetups for Figma here at the Philippines. So far, we’ve done the first ever Figma event not just in the Philippines, but also in Asia.</p>
        <p>Recently, I just made a Figma version of the Value Proposition Canvas by Stategyzer AG</p>
        <p>If you’d like to collaborate, talk about your project or brainstorm, feel free to message me during off-hours. Let’s grab a cup of coffee (on me),  Here’s my email paulwithjames@gmail.com.</p>
      </Col>
    </Row>
  </Wrapper>
)

export default IndexPage
