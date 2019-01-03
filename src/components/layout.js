import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Layout } from 'antd'
import { StaticQuery, graphql } from 'gatsby'

import favicon from '../images/pjs-icon.png'
import Navbar from './navbar'
import Footer from './footer'
import './layout.scss'

const { Header, Content } = Layout;

const App = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Paul Sabandal' },
            { name: 'keywords', content: 'One of those humans that shouts “Design is not how it looks like, it’s how it works!”' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Layout>
          <Header className="main-header">
            <Navbar />
          </Header>
          <Content>
            <Layout>
              <Content className="main-pages container">
                {children} 
              </Content>
            </Layout>
          </Content>
          <Footer />
        </Layout>
      </div>
    )}
  />
)

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
