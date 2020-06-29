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
        <p>
          Product Designer/Manager based in the Philippines. Loves crafting meaningful <a href="/work" target="_blank">experiences</a> by solving digital problems through UX and Product Management.
        </p>

        <p>
          Currently working as the Head of Product of <a href="https://qwikwire.com/" target="_blank">Qwikwire</a>, One of the <a href="https://e27.co/philippines-startup-qwikwire-raises-funding-first-asia-venture-capital-cerebro-labs-20180227/" target="_blank">rising startups</a> here in the Philippines and funded by 500 Startups.
        </p>
        <p>In the other hand, I'm also organizing meetups for <a href="https://www.facebook.com/groups/1024359284439013/" target="_blank">Figma in the Philippines</a>.</p>
        <p>If you'd like to collaborate, talk about your project or brainstorm, feel free to message me during off-hours. Let’s grab a cup of coffee (on me),  Here’s my email <a href="mailto:paulwithjames@gmail.com">paulwithjames@gmail.com</a></p>
        
      </Col>
    </Row>
  </Wrapper>
)

export default IndexPage
