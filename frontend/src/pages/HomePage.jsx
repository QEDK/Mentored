import React from 'react'
import CuratedList from '../components/CuratedList'
// import Searchbar from '../components/Searchbar'

const HomePage = () => {
    return (
        <>
            {/* <Searchbar /> */}
            <h4 className='text-center mt-5'>Curated lists just for you!</h4>
            <CuratedList />
        </>
    )
}

export default HomePage
