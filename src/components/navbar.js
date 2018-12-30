import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu } from 'antd'
import Logo from '../images/logo.svg';
import CV from '../docs/paul-sabandal-cv.pdf';
import './navbar.scss'

class Navbar extends Component {

  render() {
    return (
      <div className="navbar container unscrolled">
        <div className="logo">
          <Link to="/">
            <img src={Logo} className="logo-white" />
          </Link>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className="nav"
        >
          <Menu.Item key="1"><Link to="/ikigai">Ikigai</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/corporate">Work</Link></Menu.Item>
          <Menu.Item key="3"><a href={CV} target="_blank">Read my CV</a></Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Navbar

