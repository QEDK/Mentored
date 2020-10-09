import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TrackCard from './TrackCard'

const CuratedList = () => {
    return (
        <>
            <Row>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <TrackCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <TrackCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <TrackCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <TrackCard />
                </Col>
            </Row>
        </>
    )
}

export default CuratedList
