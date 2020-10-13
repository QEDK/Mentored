import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProfileListCard from './ProfileListCard'
import axios from 'axios'

class ProfileList extends Component {
    constructor() {
        super();
        this.state = {
            profile: {},
            username: '',
            curations: []
        };
    }

    componentDidMount(username, profile, curations) {
        const user = localStorage.getItem('username')
        const send = {
            username: user
        }

        axios.post('https://mentored-n3wkrveexq-uc.a.run.app/api/get_profile', send)
            .then((res) => {
                profile = res.data[0]
                curations = profile.curations
                this.setState({
                    profile: profile,
                    curations: curations
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { curations } = this.state;
       
        return (
            <>
                <Row>
                    {curations.map(curation => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <ProfileListCard curations={curation} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}


export default ProfileList
