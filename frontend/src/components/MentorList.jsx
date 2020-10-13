import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProfileListCard from './ProfileListCard'
import axios from 'axios'

class MentorList extends Component {
    constructor() {
        super();
        this.state = {
            profile: {},
            username: '',
            curations: [],
            fields: {}
        };
    }

    componentDidMount(username, profile, curations, fields) {
        const user = window.location.pathname.split('/mentor/')[1]
        const send = {
            username: user
        }

        axios.post('https://mentored-n3wkrveexq-uc.a.run.app/api/get_profile', send)
            .then((res) => {
                profile = res.data[0]
                fields = profile.fields
                curations = profile.curations
                this.setState({
                    profile: profile,
                    curations: curations,
                    fields: fields
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { curations, fields } = this.state;

        return (
            <>
                <Row>
                    {curations.map(curation => (
                        <Col sm={12} md={6} lg={6} key={curation.pk}>
                            <ProfileListCard curations={curation} fields={fields} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}
export default MentorList