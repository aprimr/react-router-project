import React from 'react'
import blogImg from '../../assets/Blog.svg';

export default function blog() {
  return (
    <>
    <div className='w-screen flex justify-center py-14'>
        <img className="w-2/4" src={blogImg} alt="blog" />
    </div>
    </>
  )
}

