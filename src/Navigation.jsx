import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
    render() {
        const items = ["Home", "Measured", "Analysed"];
        const navItems = items.map(name => <NavItem href="#">{name}</NavItem>);
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Hydroponics-Web</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>{navItems}</Nav>
            </Navbar>
        );
    }
}
