import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'

class MakeList extends Component {
    constructor() {
        super();
        this.state = {
            topic: '',
            videos: '',
            books: '',
            blogs: ''
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submit')
        const newCuration = {
            author: "tryingSignup2",
            topic: this.state.topic,
            data: {
                videos: this.state.videos,
                books: this.state.books,
                blogs: this.state.blogs
            }
        };
        axios
            .post('https://mentored-n3wkrveexq-uc.a.run.app/api/add_curation', newCuration)
            .then((newCuration) => {
                console.log(newCuration)
                this.props.history.push('/proile')
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
            <Container>
                <h4>Add a new list</h4>
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Group controlId='topic'>
                        <Form.Label>Topic</Form.Label>
                        <Form.Control name='topic' type='text' placeholder='Enter Topic Name' value={this.state.topic} onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='videos'>
                        <Form.Label>Recommended Videos</Form.Label>
                        <Form.Text className="text-muted">
                            For multiple videos, please seperate them with a comma.
                        </Form.Text>
                        <Form.Control type='url' name='videos' placeholder='Enter URL to Video'
                            value={this.state.videos} onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='books'>
                        <Form.Label>Recommended Books</Form.Label>
                        <Form.Text className="text-muted">
                            For multiple books, please seperate them with a comma. Do mention the ISBN number for easy search. Example: Pro React 16 (1484244508)
                        </Form.Text>
                        <Form.Control type='text' name='books' placeholder='Enter Name of the Book'
                            value={this.state.books} onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='blogs'>
                        <Form.Label>Recommended Blogs</Form.Label>
                        <Form.Text className="text-muted">
                            For multiple blogs, please seperate them with a comma.
                        </Form.Text>
                        <Form.Control type='url' name='blogs' placeholder='Enter URL to Blog'
                            value={this.state.blogs} onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Make</Button>
                </Form>
            </Container>
        )
    }
}

export default MakeList
