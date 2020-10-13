import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import TrackCard from './TrackCard'
import axios from 'axios'

class CuratedList extends Component {

    constructor() {
        super();
        this.state = {
            list: []
        };
    }
    componentDidMount(list) {
        axios.get('https://mentored-n3wkrveexq-uc.a.run.app/api/all_curations', list)
            .then((res) => {
                list = res.data
                this.setState({
                    list: list
                })

            })
    }
    render() {
        const { list } = this.state;
        return (
            <>
                <Row>
                    {list.map(onelist => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <TrackCard list={onelist} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}

export default CuratedList
