import React from 'react'
import { Accordion, Card, ListGroup } from 'react-bootstrap'

const ListPage = () => {
    return (
        <>
            <h2 className='text-center mt-5 mb-5 pl-5 pr-5'>Title of track comes here</h2>
            <Accordion className='mt-5 mb-5 pl-5 pr-5'>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Books
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
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

export default ListPage
