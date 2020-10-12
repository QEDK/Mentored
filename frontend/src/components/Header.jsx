import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo.png'

const Header = () => {
    const [user, setUser] = useState(false)
    useEffect(() => {
        // if (user === false) {
        //     this.props.history.push('/login');
        // }
        if (document.cookie.split('loggedin=')[1].length > 5) {
            console.log('header accessed')
            setUser(true);
        }
    }, [])
    console.log(user)
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
                            <LinkContainer to='/curated'><Nav.Link><i className='fas fa-list-alt mr-2' aria-hidden="true"></i>Lists</Nav.Link></LinkContainer>
                            <LinkContainer to='/mentors'><Nav.Link><i className='fas fa-users mr-2' aria-hidden="true"></i>Mentors</Nav.Link></LinkContainer>
                            {user ?
                                <LinkContainer to='/profile'><Nav.Link><i className='fas fa-user mr-2' aria-hidden="true"></i>Profile</Nav.Link></LinkContainer>
                                : <LinkContainer to='/login'><Nav.Link><i className='fas fa-user mr-2' aria-hidden="true"></i>Login</Nav.Link></LinkContainer>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
