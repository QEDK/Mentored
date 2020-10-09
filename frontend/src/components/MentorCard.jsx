import React from 'react'
import { Card } from 'react-bootstrap'

const MentorCard = () => {
    return (
        <Card border='primary' className='my-3 p-3 rounded'>
            <Card.Body>
                    <Card.Title as='h6'>Name of person</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Frontend, Backend</Card.Subtitle>
                    <Card.Text>
                        Bio - Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">GitHub URL</Card.Link>
                    <Card.Link href="#">Discord</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MentorCard
