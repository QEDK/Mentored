import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import axios from 'axios'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class LoginPage extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            username: '',
            password: '',
            // errors: {}
            loggedin: cookies.get('loggedin') || cookies.set('loggedin', "abcd", '/'),
            uid: cookies.get('uid') || cookies.set('uid', "1234", '/')
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submit')
        const userData = {
            username: this.state.username,
            password: this.state.password,
            loggedin: this.state.loggedin,
            uid: this.state.uid
        };
        axios
            .post('https://mentored-n3wkrveexq-uc.a.run.app/api/signin', userData)
            .then((loggedin, uid) => {
                const { cookies } = this.props;

                cookies.set('loggedin', loggedin, { path: '/' });
                cookies.set('uid', uid, { path: '/' });
                this.setState({
                    loggedin: this.state.loggedin,
                    uid: this.state.uid
                });
                if (document.cookie.split('loggedin=')[1].length > 5 && document.cookie.split('uid=')[1].length > 5) {
                    console.log('signed in successfully')
                    console.log('loggedin', loggedin)
                    console.log('uid', uid)
                    localStorage.setItem('username', this.state.username)
                    this.props.history.push('/profile');
                    window.location.reload()
                } else {
                    this.props.history.push('/login');
                }
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
        // const { errors } = this.state;
        return (
            <FormContainer>
                <h2>Login</h2>
                <Form noValidate onSubmit={this.handleSubmit}>
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
                    {/* {errors.general && (
                        <h6>
                            {errors.general}
                        </h6>
                    )} */}
                    <Button type='submit' variant='primary'>Login</Button>
                </Form>

                <Row className='py-3'>
                    <Col>
                        New Customer?
                    <Link to='/signup'> Signup</Link>
                    </Col>
                </Row>
            </FormContainer>
        )
    }
}

export default withCookies(LoginPage)
