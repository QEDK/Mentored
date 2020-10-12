import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

class MakeList extends Component {
    render() {
        return (
            <Container>
                <h4>Add a new list</h4>
                <Form>
                    <Form.Group controlId='topic'>
                        <Form.Label>Topic</Form.Label>
                        <Form.Control name='topic' type='text' placeholder='Enter Topic Name'>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='videos'>
                        <Form.Label>Recommended Videos</Form.Label>
                        <Form.Text className="text-muted">
                            For multiple videos, please seperate them with a comma.
                        </Form.Text>
                        <Form.Control type='url' name='videos' placeholder='Enter URL to Video'></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='books'>
                        <Form.Label>Recommended Books</Form.Label>
                        <Form.Text className="text-muted">
                            For multiple books, please seperate them with a comma. Do mention the ISBN number for easy search. Example: Pro React 16 (1484244508)
                        </Form.Text>
                        <Form.Control type='text' name='books' placeholder='Enter Name of the Book'></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='blogs'>
                        <Form.Label>Recommended Blogs</Form.Label>
                        <Form.Text className="text-muted">
                            For multiple blogs, please seperate them with a comma.
                        </Form.Text>
                        <Form.Control type='url' name='blogs' placeholder='Enter URL to Blog'></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Make</Button>
                </Form>
            </Container>
        )
    }
}

export default MakeList
