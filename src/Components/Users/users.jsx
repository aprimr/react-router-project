import React from 'react'
import ProfilePic from '../../assets/users.svg'
import { useParams } from 'react-router-dom'

function users() {
    const { userid } = useParams();
  return (
    <>
        <div className='w-full flex justify-center'>
            <div className='w-1/2 h-1/2 m-8'>
                <div className='w-full flex justify-center'>
                    <img src={ProfilePic} alt="profile" className='w-1/6'/>
                </div>
                <p className='mt-5 text-2xl text-white w-full flex justify-center font-semibold bg-red-500 p-5'>UserId : {userid}</p>
            </div>
        </div>
    </>    
  )
}

export default users