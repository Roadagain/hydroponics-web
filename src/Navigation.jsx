import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
    render() {
        const items = [
            {name: 'Measured', link: '/measured.html'},
            {name: 'Analysed', link: '/analysed.html'}
        ];
        const navItems = items.map(item => <NavItem href={item.link}>{item.name}</NavItem>);
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Hydroponics-Web</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>{navItems}</Nav>
            </Navbar>
        );
    }
}
