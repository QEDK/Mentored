import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import ProfileList from '../components/ProfileList';

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            profile: {},
            username: '',
            fields: {},
            list: {}
        };
    }

    componentDidMount(username, profile, fields, list) {
        const user = localStorage.getItem('username')
        const send = {
            username: user
        }

        axios.post('https://mentored-n3wkrveexq-uc.a.run.app/api/get_profile', send)
            .then((res) => {
                profile = res.data[0]
                fields = profile.fields
                list = profile.curations
                this.setState({
                    profile: profile,
                    fields: fields,
                    list: list,
                    username: user
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { username, fields } = this.state;
        return (
            <>
            {username ? (<Row>
                <Col md={3}>
                    <h2>User Profile</h2>
                    <Form>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control disabled type='name' placeholder={fields.name}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='username'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control disabled name='username' type='text' placeholder={fields.username}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='company'>
                            <Form.Label>Company</Form.Label>
                            <Form.Control disabled type='text' name='company' placeholder={fields.company}></Form.Control>
                        </Form.Group>

                    </Form>
                </Col>
                <Col className='profilecur' md={9}>
                    <h2>Your Curated Lists</h2>
                    <ProfileList />
                    <Link to='/profile/makelist'><Button>Create New</Button></Link>
                </Col>
            </Row>) : <h2 className='d-flex justify-content-center mt-5'>Please&nbsp;<Link to='/login'>Login</Link></h2>}
            </>
        )
    }
}

export default ProfilePage
