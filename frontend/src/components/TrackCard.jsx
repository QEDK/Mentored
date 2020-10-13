import React from 'react'
import { Card } from 'react-bootstrap'

const TrackCard = ({list}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Card.Body>
                {/* <a href={`/list/${track.id}`}>*/}
                <a href='/list/1'>
                    <Card.Title as='h6'>{list.topic}</Card.Title>
    <Card.Text className="mb-2 text-muted">Created by: {list.author}</Card.Text>
                </a>
            </Card.Body>
        </Card>
    )
}

export default TrackCard
