import React from 'react'
import { Card } from 'react-bootstrap'

const TrackCard = () => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Card.Body>
                {/* <a href={`/list/${track.id}`}>*/}
                <a href='/list/1'>
                    <Card.Text className="mb-2 text-muted">Created by: JuanPFlores from GitHub Education</Card.Text>
                    <Card.Title as='h6'>Frontend Web Developer</Card.Title>
                </a>
            </Card.Body>
        </Card>
    )
}

export default TrackCard
