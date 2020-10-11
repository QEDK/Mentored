import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import landing from '../assets/landingImage.png'

const LandingPage = () => {
    return (
        <>
            <Container fluid='md' style={{overflow:'hidden', width:'95vw'}}>
                <Row>
                    <Col xs={12} md={8} lg={6}>
                        <h2 className='mt-5'>Learn the Way of<br/><span className='landspan'>Industry Experts</span></h2>
                    </Col>
                    <Col xs={12} md={8} lg={6}>
                        <Image src={landing} alt='landing' className='landimg'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LandingPage
