import React, { Component } from 'react'
import { Accordion, Card, ListGroup } from 'react-bootstrap'
import axios from 'axios'

class ListPage extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            fields: {},
            data: {},
            pk: 0
        };
    }
    componentDidMount(list, fields, data, pk) {
        axios.get('https://mentored-n3wkrveexq-uc.a.run.app/api/all_curations', list)
            .then((res) => {
                const i = window.location.pathname.split('/curated/')[1]
                list = res.data[i - 1]
                fields = list.fields
                data = fields.data
                pk = i
                this.setState({
                    list: list,
                    fields: fields,
                    data: data,
                    pk: pk
                })
                console.log('list= ', list)
                console.log('fields= ', fields)
                console.log('data= ', data)
                console.log('pk= ', pk)
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { fields, data, pk } = this.state
        const book = data.books
        console.log('book= ',book)
        return (
            <>
                <h2 className='text-center mt-5 mb-5 pl-5 pr-5'>{fields.topic}</h2>
                <Accordion className='mt-5 mb-5 pl-5 pr-5'>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Books
                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ListGroup>
                                {/* {data.books.map(book => <ListGroup.Item>{book}</ListGroup.Item>)} */}
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Videos
                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Blogs
                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </>
        )
    }
}
export default ListPage
