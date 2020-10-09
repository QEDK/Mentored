import React from 'react'
import AllMentors from '../components/AllMentors'
import Searchbar from '../components/Searchbar'

const MentorsPage = () => {
    return (
        <>
        <Searchbar />
        <h4 className='text-center py-3'>
           Meet your mentor here!
        </h4>
           <AllMentors />
        </>
    )
}

export default MentorsPage
