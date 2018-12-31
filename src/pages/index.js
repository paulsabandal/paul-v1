import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'antd'

import Wrapper from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Row className="heading" gutter={16}>
      <Col md={18} xs={24}>
        <h2 class="header">Hello, I'm Paul!</h2>
        <p class="sub-header">One of those humans that shouts “Design is not how it looks like, it’s how it works!”.</p>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col md={18} xs={24}>
        <p>I'm a Product Designer based from Manila, Philippines. Crafting experiences by gathering data from users to providing a solutions for them, <Link to="/work">digitally.</Link></p>
        <p>Currently working as the Head of Product Development of <a href="https://qwikwire.com/" target="_blank">Qwikwire</a>, One of the <a href="https://e27.co/philippines-startup-qwikwire-raises-funding-first-asia-venture-capital-cerebro-labs-20180227/" target="_blank">rising startups</a> here in the Philippines. We do cross-border payments for real-estates.</p>
        <p>Also, I'm helping to organize meetups for <a href="https://www.facebook.com/groups/1024359284439013/" target="_blank">Figma Philippines</a>. So far, we’ve done the first ever Figma event not just in the Philippines, but also in Asia.</p>
        <p>Recently, I just made a Figma version of the <a href="https://www.figma.com/resources/assets/value-proposition-canvas/" target="_blank">Value Proposition Canvas</a> by Stategyzer AG.</p>
        <p>If you’d like to collaborate, talk about your project or brainstorm, feel free to message me during off-hours. Let’s grab a cup of coffee (on me),  Here’s my email <a href="mailto:hello@paulsabandal.com">hello@paulsabandal.com</a></p>
      </Col>
    </Row>
  </Wrapper>
)

export default IndexPage
