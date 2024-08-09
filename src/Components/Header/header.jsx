import React from 'react'
import { NavLink } from 'react-router-dom'

export default function header() {
  return (
    <>
    <div className='w-screen h-16 sticky top-0 bg-white shadow '>
        <div className="h-full px-32 flex justify-between items-center">
            <div className='text-3xl font-bold text-gray-600'>React<span className='text-red-600'>Router</span></div>
            <div className='flex gap-10'>
                <Links name="Home" to="/" />
                <Links name="Blog" to="/Blog" />
                <Links name="About" to="/About" />
                <Links name="Contact" to="/Contact" />
            </div>
            <div className='flex gap-5'>
                <Button name="Login" />
                <Button name="Signup" />
            </div>
            
        </div>
    </div>
    </>
  )
}

function Links({name,to}){
    return(
        <>
        <NavLink to={to} className={({ isActive }) => `${isActive ? 'text-red-600' : 'text-gray-600'} font-normal text-lg cursor-pointer hover:text-red-600`}>{name}</NavLink>
        </>
    )
}

function Button({name}){
    return(
        <>
        <button className='px-5 py-1.5 bg-red-600 text-white font-semibold border-2 border-red-600 rounded-md uppercase hover:bg-white hover:text-red-600'>{name}</button>
        </>
    )
}