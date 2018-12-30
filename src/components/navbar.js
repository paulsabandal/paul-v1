import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu, Popover, Button } from 'antd'
import Logo from '../images/logo.svg';
import NavIcon from '../images/nav-icon-phone.svg';
import CV from '../docs/paul-sabandal-cv.pdf';
import './navbar.scss'

class Navbar extends Component {

  render() {
    const content = (
      <Menu
        mode="vertical"
        className="nav"
      >
        <Menu.Item key="1"><Link to="/ikigai">Ikigai</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/work">Work</Link></Menu.Item>
        <Menu.Item key="3"><a href={CV} target="_blank">Read my CV</a></Menu.Item>
    </Menu>
    );

    return (
      <div className="navbar container unscrolled">
        <div className="logo">
          <Link to="/">
            <img src={Logo} className="logo-white" />
          </Link>
        </div>
        <Popover placement="bottomRight" className="nav-on-mobile" content={content} trigger="click">
          <Button className="toggle-on-mobile"><img src={NavIcon} /></Button>
        </Popover>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className="nav"
        >
          <Menu.Item key="1"><Link to="/ikigai">Ikigai</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/work">Work</Link></Menu.Item>
          <Menu.Item key="3"><a href={CV} target="_blank">Read my CV</a></Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Navbar

