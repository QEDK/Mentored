import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios'
import MentorList from '../components/MentorList';
import {
    EmailIcon, 
    TelegramIcon
} from "react-share";
import { SocialIcon } from 'react-social-icons';

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
        const { username, fields } = this.state;
        return (
            <>
            {<Row>
                <Col md={3}>
                    <h2>Mentor Profile</h2>
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
                    <h4>Contact</h4>
                    <Container>
                        <Row>
                            <Col><SocialIcon url="https://twitter.com/" /></Col>
                            <Col><SocialIcon url="https://linkedin.com/in" /></Col>
                            <Col><SocialIcon url="https://medium.com/" /></Col>
                        </Row>
                        <Row>
                            <Col>.</Col>
                        </Row>
                        <Row>
                            <Col><SocialIcon url="https://github.com/" fgColor="#ffffff" bgColor="#000000"/></Col>
                            <Col><EmailIcon size={50} round={true} iconFillColor='red'/></Col>
                            <Col><TelegramIcon size={50} round={true} /></Col>
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