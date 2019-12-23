import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                 <Link to="/">Codelife</Link>
             </Navbar.Brand>
             <Navbar.Toggle/>
             </Navbar.Header>
             <Navbar.Collapse>
                 <Nav pullRight>
                   <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                     Home
                   </NavItem>
                   <NavItem eventKey={2} componentClass={Link} href="/ContextHook" to="/ContextHook">
                    ContextHook
                   </NavItem>
                   <NavItem eventKey={3} componentClass={Link} href="/ReducerHook" to="/ReducerHook">
                    ReducerHook
                   </NavItem>
                   <NavItem eventKey={4} componentClass={Link} href="/EffectHook" to="/EffectHook">
                    EffectHook
                   </NavItem>
                   <NavItem eventKey={5} componentClass={Link} href="/GlobalContextReducer" to="/GlobalContextReducer">
                    GlobalContextReducer
                   </NavItem>
                 </Nav>
             </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;