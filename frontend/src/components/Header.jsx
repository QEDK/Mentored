import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <Navbar bg="bluescheme" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/"><img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                        alt="logo"
                    />Mentored</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/"><i className='fas fa-list-alt mr-2' aria-hidden="true"></i>Lists</Nav.Link>
                            <Nav.Link href="/mentors"><i className='fas fa-users mr-2' aria-hidden="true"></i>Mentors</Nav.Link>
                            <Nav.Link href="/login"><i className='fas fa-user mr-2' aria-hidden="true"></i>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
