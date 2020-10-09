import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MentorCard from './MentorCard'

const AllMentors = () => {
    return (
        <>
            <Row>
                <Col sm={12} md={6} lg={4} xl={4}>
                    <MentorCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={4}>
                    <MentorCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={4}>
                    <MentorCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={4}>
                    <MentorCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={4}>
                    <MentorCard />
                </Col>
            </Row>
        </>
    )
}

export default AllMentors
