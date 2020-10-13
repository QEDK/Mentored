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
        console.log('username =', username)
        axios.post('https://mentored-n3wkrveexq-uc.a.run.app/api/get_profile', send)
            .then((res) => {
                profile = res.data[0]
                curations = profile.curations
                this.setState({
                    profile: profile,
                    curations: curations
                })
                console.log('profile = ', profile)
                console.log('curations = ', curations)
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { curations } = this.state;
        // const curationsNew = this.state.curations
        // curationsNew.forEach(element => {
        //     console.log("foreach element = ", element)
        // });
        console.log('in profile list component = ', curations);
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
