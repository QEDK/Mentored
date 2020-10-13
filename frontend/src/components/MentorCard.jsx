import React from 'react'
import { Card } from 'react-bootstrap'

const MentorCard = ({profiles}) => {
  
    return (
        <Card border='primary' className='my-3 p-3 rounded' style={{height: '80%'}}>
            <Card.Body>
                    <Card.Title as='h6'>{profiles.fields.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Frontend, Backend</Card.Subtitle>
                    <Card.Text>
                        Works at - {profiles.fields.company}
                    </Card.Text>
                    <Card.Link href="#">Contact Mentor</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MentorCard
