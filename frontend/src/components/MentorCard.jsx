import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MentorCard = ({profiles}) => {
  console.log(profiles)
    return (
        <Card border='primary' className='my-3 p-3 rounded' style={{height: '80%'}}>
            <Card.Body>
                <Link to={`/mentor/${profiles.fields.username}`}>
                    <Card.Title as='h6'>{profiles.fields.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Frontend, Backend</Card.Subtitle>
                    <Card.Text>
                        Works at - {profiles.fields.company}
                    </Card.Text>
                    <Card.Link href="#"><i class="far fa-comment fa-2x"></i></Card.Link>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default MentorCard
