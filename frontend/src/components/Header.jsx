import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from '../assets/logo.png'

const Header = ({cookies}) => {
    const [user, setUser] = useState(false)
    useEffect(() => {

        if (document.cookie.split('loggedin=')[1].length > 5 && document.cookie.split('uid=')[1].length > 5) {
            setUser(true);
        }
    }, []);

    function logout(){
        document.cookie="loggedin=abcd"
        document.cookie="uid=1234"
        setUser(false)
        localStorage.clear()
    }
    return (
        <header>
            <Navbar bg="bluescheme" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top mr-2"
                            alt="logo"
                        />Mentored</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {user ?
                                <NavDropdown title="User" id="basic-nav-dropdown">
                                    <NavDropdown.Item><LinkContainer to='/profile'><Nav.Link><i className='fas fa-user mr-2' aria-hidden="true"></i>Profile</Nav.Link></LinkContainer></NavDropdown.Item>
                                    <NavDropdown.Item onClick={logout}><LinkContainer to='/'><Nav.Link><i className='fas fa-sign-out-alt mr-2' aria-hidden="true"></i>Logout</Nav.Link></LinkContainer></NavDropdown.Item>
                                </NavDropdown>
                                : <LinkContainer to='/login'><Nav.Link><i className='fas fa-user mr-2' aria-hidden="true"></i>Login</Nav.Link></LinkContainer>}
                            <LinkContainer to='/curated'><Nav.Link><i className='fas fa-list-alt mr-2' aria-hidden="true"></i>Lists</Nav.Link></LinkContainer>
                            <LinkContainer to='/mentors'><Nav.Link><i className='fas fa-users mr-2' aria-hidden="true"></i>Mentors</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
