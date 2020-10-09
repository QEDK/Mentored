import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer'

const SignupPage = () => {
    return (
        <FormContainer>
            <h2>Come, Join Our Community!</h2>
            <Form>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter Full Name'></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email Address'></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password'></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password'></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>SignUp</Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an account?
                    <Link to='/login'>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default SignupPage
