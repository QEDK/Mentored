import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'

const LoginPage = () => {
    return (
        <FormContainer>
            <h2>Login</h2>
            <Form>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email Address'></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password'></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Login</Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?
                    <Link to='/signup'>Signup</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginPage
