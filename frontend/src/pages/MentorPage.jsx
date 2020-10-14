import React, { Component } from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios'
import MentorList from '../components/MentorList';


class MentorPage extends Component {
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
        const user = window.location.pathname.split('/mentor/')[1]
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

        const { fields } = this.state;
        return (
            <>
            {<Row>
                <Col md={3}>

                    <h3>Mentor's Profile</h3>
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
                    <h4 className='mt-4' style={{color: "#f8c006"}}>Contact</h4>
                    <Container>
                        <Row className='mt-4'>
                            <Col><i className='fab fa-twitter fa-2x mr-2' aria-hidden="true"></i></Col>
                            <Col><i className='fab fa-linkedin-in fa-2x mr-2' aria-hidden="true"></i></Col>
                            <Col><i className='fab fa-medium-m fa-2x mr-2' aria-hidden="true"></i></Col>
                        </Row>
                        <Row>
                            <Col>.</Col>
                        </Row>
                        <Row>

                            <Col><i className='fab fa-github fa-2x mr-2' aria-hidden="true"></i></Col>
                            <Col><i className='far fa-envelope fa-2x mr-2' aria-hidden="true"></i></Col>
                            <Col><i className='fab fa-telegram-plane fa-2x mr-2' aria-hidden="true"></i></Col>
                        </Row>
                    </Container>
                </Col>
                <Col className='profilecur' md={9}>
                    <h2>Mentor's Curated Lists</h2>
                    <MentorList />
                </Col>
            </Row>}
            </>
        )
    }
}
export default MentorPage
