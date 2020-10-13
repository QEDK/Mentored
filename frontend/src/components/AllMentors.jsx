import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import MentorCard from './MentorCard'
import axios from 'axios'
class AllMentors extends Component {
    constructor() {
        super();
        this.state = {
            profiles: []
        };
    }
    componentDidMount(profiles) {
        axios.get('https://mentored-n3wkrveexq-uc.a.run.app/api/all_mentors', profiles)
            .then((res) => {
                profiles = res.data
                this.setState({
                    profiles: profiles
                })
                console.log(profiles)
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        console.log('rendered mentors  : ', this.state.profiles)
        const { profiles } = this.state;
        return (
            <>
                <Row>
                    {profiles.map(profile => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <MentorCard profiles={profile} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}

export default AllMentors
