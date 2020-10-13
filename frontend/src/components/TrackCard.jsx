import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TrackCard = ({ list }) => {
    console.log(list)
    return (
        <Card className='my-3 p-3 rounded' key={list.pk}>
            <Card.Body>
                <Link to={`/curated/${list.pk}`}>
                    <Card.Title as='h6'>{list.fields.topic}</Card.Title>
                    <Card.Text className="mb-2 text-muted">Created by: {list.fields.profile.name} from {list.fields.profile.company}</Card.Text>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default TrackCard
