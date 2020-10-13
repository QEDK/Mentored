import React from 'react'
import {Link }from 'react-router-dom'
import { Container, Row, Col, Image, Button} from 'react-bootstrap'
import landing from '../assets/landingImage.png'

const LandingPage = () => {
    return (
        <>
            <Container fluid='md' style={{overflow:'hidden', width:'95vw'}}>
                <Row>
                    <Col xs={12} md={8} lg={6}>
                        <h2 className='mt-5'>Learn the Way of<br/><span className='landspan'>Industry Experts</span></h2>
                        <p style={{fontSize:'22px'}} className='text-muted mt-4'>Have you ever felt overwhelmed with the amount of resources available on the Internet?
                        </p>
                        <p className='mt-2' style={{color:'#0B173D', fontSize:'22px'}}>Mentored provides you <span style={{color:'#DAA520'}}>curated paths and guidance</span> from professionals in the fields of front-end and back-end web dev, devops, data science and many more....</p>
                        <Link to='/curated'><Button className='landbtn' style={{padding: '15px', fontSize:'20px', borderRadius: '5px', backgroundColor: '#0B173D', color:'#f8c006'}}>Get Started for Free !</Button></Link>
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
