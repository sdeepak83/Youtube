import React from 'react'
import { Profile_Logo, Youtube_Logo } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
const Head = () => {
    const dispatch = useDispatch()
    const toggleHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <>
            <div className='flex justify-between align-middle py-4 px-3 shadow-lg'>
                <div className='flex'>
                    <h1
                        onClick={() => toggleHandler()}
                        className='text-3xl mr-3 cursor-pointer ease-in-out duration-300	hover:scale-125'>☰</h1>


                    <img src={Youtube_Logo} alt="logo" className='h-8' />
                </div>

                <div className=''>

                    <input type="text"
                        placeholder='Search '
                        className='lg:w-96 md:w-40 px-8 py-3 rounded-l-full border-2  border-gray-400 outline-none' />

                    <button
                        className='px-5 py-3  rounded-r-full  border-gray-400 border-2 hover:bg-gray-300 text-black border-l-0  '>⌕ </button>
                </div>

                <div>
                    <img className='h-12' src={Profile_Logo} alt="Profile_Logo" />
                </div>
            </div>
        </>
    )
}

export default Head