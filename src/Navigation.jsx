import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends React.Component {
    render() {
        const items = [
            {name: 'Measured', link: '/measured'},
            {name: 'Analysed', link: '/analysed'}
        ];
        const navItems = items.map((item, index) => {
            return (
                <LinkContainer to={item.link} key={index}>
                    <NavItem>{item.name}</NavItem>
                </LinkContainer>
            );
        });
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Hydroponics-Web</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>{navItems}</Nav>
            </Navbar>
        );
    }
}
