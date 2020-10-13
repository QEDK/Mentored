import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer'
import axios from 'axios'

class SignupPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            name: '',
            company: ''
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const newUserData = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            company: this.state.company
        };
        axios
            .post('https://mentored-n3wkrveexq-uc.a.run.app/api/signup', newUserData)
            .then((newUserData) => {
                this.props.history.push('/login')
            })
            .catch((err) => {
                this.setState({
                    errors: err.response,
                });
            });
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <FormContainer>
                <h6 className='text-center mt-3'>Are you an Industry Expert and want to help Mentor?</h6>
                <h4 className='text-center'>Join us Today!</h4>
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type='text' placeholder='Enter Full Name' value={this.state.name} onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='username' type='text' placeholder='Enter Username'
                            value={this.state.username}
                            onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type='password' placeholder='Enter Password'
                            value={this.state.password}
                            onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='company'>
                        <Form.Label>Company</Form.Label>
                        <Form.Control type='text' name='company' placeholder='Enter Company Name' value={this.state.company}
                            onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>SignUp</Button>
                </Form>

                <Row className='py-3'>
                    <Col>
                        Have an account?
                    <Link to='/login'> Login</Link>
                    </Col>
                </Row>
            </FormContainer>
        )
    }
}

export default SignupPage
