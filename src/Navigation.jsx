import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
    render() {
        const items = [
            {name: 'Measured', link: '/measured.html'},
            {name: 'Analysed', link: '/analysed.html'}
        ];
        const navItems = items.map((item, index) => <NavItem href={item.link} key={index}>{item.name}</NavItem>);
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
