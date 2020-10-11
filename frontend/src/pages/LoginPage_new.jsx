import React, {Component} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

class LoginPage extends Component{
    state={
        credentials: {
            username: '',
            password: '',
        }
    }
    login = event => {
        event.preventDefault();
        cookies.set('loggedin', '', { path: '/' });
        console.log(this.state.credentials)
        fetch('https://mentored-n3wkrveexq-uc.a.run.app/api/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8',
        },
            body: JSON.stringify(this.state.credentials),
        })
        .then(data => {
            console.log(cookies)
            // this.props.history.push('/');
        }).catch(error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials
        cred[event.target.name] = event.target.value
        this.setState({credentials: cred})
    }

    render(){
    return (
        <FormContainer>
            <h2>Login</h2>
            <Form noValidate>
                <Form.Group controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name='username' placeholder='Enter Username' onChange={this.inputChanged} value={this.state.credentials.username}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter Password' onChange={this.inputChanged} value={this.state.credentials.password}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary' onClick={this.login}>Login</Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?
                    <Link to='/signup'>Signup</Link>
                </Col>
            </Row>
        </FormContainer>
    )}
}

export default LoginPage
