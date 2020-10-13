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
            books: [],
            videos: [],
            blogs: [],
            pk: 0
        };
    }
    componentDidMount(list, fields, data, blogs, videos, books, pk) {
        axios.get('https://mentored-n3wkrveexq-uc.a.run.app/api/all_curations', list)
            .then((res) => {
                const i = window.location.pathname.split('/curated/')[1]
                list = res.data[i - 1]
                fields = list.fields
                data = fields.data
                books = data.books.split(',')
                blogs = data.blogs.split(',')
                videos = data.videos.split(',')
                pk = i
                this.setState({
                    list: list,
                    fields: fields,
                    data: data,
                    blogs: blogs,
                    videos: videos,
                    books: books,
                    pk: pk
                })
                console.log('list= ', list)
                console.log('fields= ', fields)
                console.log('data= ', data)
                console.log('pk= ', pk)
                console.log('book= ',books)
                console.log('video= ',videos)
                console.log('blog= ',blogs)
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { fields, books, videos, blogs, pk } = this.state
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
                                {books.map(book => <ListGroup.Item>{book}</ListGroup.Item>)}
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Videos
                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <ListGroup>
                            {videos.map(video => <ListGroup.Item><a href={video} target="_blank">{video}</a></ListGroup.Item>)}
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Blogs
                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <ListGroup>
                            {blogs.map(blog => <ListGroup.Item><a href={blog} target="_blank">{blog}</a></ListGroup.Item>)}
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </>
        )
    }
}
export default ListPage