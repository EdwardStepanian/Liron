import React from "react";
import {Nav, NavItem, Navbar, } from "react-bootstrap";
import PropTypes from 'prop-types';


class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedNavItem : ''
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(selectedKey){
        this.setState({
            selectedNavItem : selectedKey
        });
    }
    render(){
        return(

        <Navbar className="navbar-inverse">
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/home">Liron: Blog </a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav className="navbar-right">
                <NavItem eventKey={1} href="/login">Login</NavItem>
                <NavItem eventKey={2} href="/registration">Sign In</NavItem>
            </Nav>
        </Navbar>

    )
    }
}

Header.propTypes = {
    selectedNavItem: PropTypes.string
};

export default Header;