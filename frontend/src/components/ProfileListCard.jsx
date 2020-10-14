import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProfileListCard = ({ curations, fields }) => {
    return (
        <Card className='my-3 p-3 rounded' key={curations.pk}>
            <Card.Body>
                <Link to={`/curated/${curations.pk-20}`}>
                    <Card.Title as='h6'>{curations.fields.topic}</Card.Title>
                    <Card.Text className="mb-2 text-muted">Created by: {fields.name}</Card.Text>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProfileListCard
