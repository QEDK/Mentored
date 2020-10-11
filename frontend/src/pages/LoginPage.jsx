import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FormContainer from '../components/FormContainer'

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            // loading: false,
            // errors: {}
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submit')
        // this.setState({
        //     loading: true
        // });
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        axios
            .post('https://mentored-n3wkrveexq-uc.a.run.app/api/signin', userData)
            .then((res) => {
                console.log(document.cookie);
                // console.log(res);
                // this.setState({
                //     loading: false
                // });
                // if(document.cookie.split('; ')[1] === "CookieConsent=true"){
                // this.props.history.push('/');
                // }
            })
            .catch((err) => {
                this.setState({
                    errors: err.response,
                    // loading: false
                });
            });
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        // const { errors } = this.state;
        // const { loading } = this.state;
        return (
            <FormContainer>
                <h2>Login</h2>
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Group controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='username' type='username' placeholder='Enter Username'

                            value={this.state.username}
                            onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type='password' placeholder='Enter Password'

                            value={this.state.password}
                            onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    {/* {errors.general && (
                        <h6>
                            {errors.general}
                        </h6>
                    )} */}
                    <Button type='submit' variant='primary'
                       >Login
                        {/* {loading && (
                            <Spinner size={30} variant='primary' animation='border' />
                        )} */}
                    </Button>
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
}

export default LoginPage
