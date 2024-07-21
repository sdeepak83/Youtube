import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if (!isMenuOpen) return null;
    return (
        <div className=' p-5 shadow-lg w-48 h-screen overflow-y-scroll '>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>

            </ul>
            <ul>
                <h1 className='font-bold pt-5'>Subscription</h1>

                <li>Carry</li>
                <li>Amit</li>
                <li>Logan</li>
                <li>Trakin</li>
                <li>Nitesh</li>

            </ul>
            <ul>
                <h1 className='font-bold pt-5 '>Explore</h1>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <ul>
                <h1 className='font-bold pt-5 '>More Youtube</h1>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>



        </div>
    )
}

export default Sidebar