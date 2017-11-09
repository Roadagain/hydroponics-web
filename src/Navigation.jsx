import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends React.Component {
    render() {
        const items = [
            {name: 'Measured', link: '/measured'},
            {name: 'Analysed', link: '/analysed'}
        ];
        const navItems = items.map((item, index) => {
            return <LinkContainer to={item.link} key={index}>
                <NavItem>
                    {item.name}
                </NavItem>
            </LinkContainer>
        });
        return (
            <Navbar>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            Hydroponics-Web
                        </Navbar.Brand>
                    </LinkContainer>
                </Navbar.Header>
                <Nav>{navItems}</Nav>
            </Navbar>
        );
    }
}
