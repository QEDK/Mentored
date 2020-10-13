import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, ListGroup } from 'react-bootstrap';
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
        console.log('username =', username)
        axios.post('https://mentored-n3wkrveexq-uc.a.run.app/api/get_profile', send)
            .then((res) => {
                profile = res.data[0]
                fields = profile.fields
                list = profile.curations
                this.setState({
                    profile: profile,
                    fields: fields,
                    list: list
                })
                console.log('profile = ', profile)
                console.log('fields = ', fields)
                console.log('list = ', list)
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { fields, list } = this.state;
        console.log("in render", list)
        return (
            <Row>
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
                <Col className='profilecur pl-5' md={9}>
                    <h2>Your Curated Lists</h2>
                    <ProfileList />
                    <Link to='/profile/makelist'><Button>Create New</Button></Link>
                </Col>
            </Row>
        )
    }
}

export default ProfilePage
