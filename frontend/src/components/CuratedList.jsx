import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import TrackCard from './TrackCard'
import axios from 'axios'

const CuratedList = () => {
    // const [list, setList] = useState({})
    // axios.post('https://mentored-n3wkrveexq-uc.a.run.app/api/get_topic', list)
    //     .then(res => {
    //         setList(res)
    //         console.log(res)
    //     })
    //     .catch(err=> {
    //         console.error(err)
    //     })
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
