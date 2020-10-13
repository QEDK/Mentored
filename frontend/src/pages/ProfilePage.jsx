import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios'

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            profile: '',
            username: ''
        };
    }

    componentDidMount(username, profile) {
        const user = localStorage.getItem('username')
        const send = {
            username: user
        }
        console.log('username =', username)
        axios.post('https://mentored-n3wkrveexq-uc.a.run.app/api/get_profile', send)
            .then((res) => {
                profile = res.data
                this.setState({
                    profile: profile
                })
                console.log('profile = ', profile)
            })
            .catch(err => {
                console.error(err)
            })
    }

    // axios.post('https://mentored-n3wkrveexq-uc.a.run.app/api/get_profile', profile)
    //     .then(res => {
    //         setProfile(res)
    //         console.log(res)
    //     })
    //     .catch(err=> {
    //         console.error(err)
    //     })
    render(){
        // console.log('rendered mentor profile : ', this.state.profile)
        const { profile } = this.state;
    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                <Form>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control disabled type='name' placeholder='Preet'></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control disabled name='username' type='text' placeholder='tryingSignup2'>
                        </Form.Control>
                    </Form.Group>
                    {/* <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Password'></Form.Control>
                    </Form.Group> */}
                    <Form.Group controlId='company'>
                        <Form.Label>Company</Form.Label>
                        <Form.Control disabled type='text' name='company' placeholder='Mentored'></Form.Control>
                    </Form.Group>
                    {/* <Button type='submit' variant='primary'>Update</Button> */}
                </Form>
            </Col>
            <Col className='profilecur pl-5' md={9}>
                <h2>Your Curated Lists</h2>
                <Link to='/profile/makelist'><Button>Create New</Button></Link>
            </Col>
        </Row>
    )}
}

export default ProfilePage
