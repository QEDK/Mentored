import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const Searchbar = () => {
    return (
            <InputGroup className="mt-5 mb-3 pl-5 pr-5">
                <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><i className='fas fa-search' aria-hidden="true"></i></InputGroup.Text>
                </InputGroup.Prepend>
            </InputGroup>
    )
}

export default Searchbar
