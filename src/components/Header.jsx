import React from "react";
import {Nav, NavItem} from "react-bootstrap";

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Nav bsStyle="pills" activeKey={1}>
                <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
            </Nav>
        )
    }
}

export default Header;