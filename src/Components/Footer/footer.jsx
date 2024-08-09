import React from 'react'
import { NavLink } from 'react-router-dom'

export default function footer() {
  return (
    <>
    <div className="h-auto w-full border-t-2 border-gray-100">
        <div className='px-56 py-10 flex flex-wrap justify-between'>
            <div className='text-3xl font-bold text-gray-600'>React<span className='text-red-600'>Router</span></div>
            <div className='flex flex-wrap gap-16'>
                <div className='flex flex-col gap-5'>
                    <LinkHead text='Pages' />
                    <LinkSub text='Home' to="/" />
                    <LinkSub text='About' to="/About" />
                </div>
                <div className='flex flex-col gap-5'>
                    <LinkHead text='Follow Us' />
                    <LinkSub text='LinkedIn' />
                    <LinkSub text='Github' />
                </div>
                <div className='flex flex-col gap-5'>
                    <LinkHead text='Legal' />
                    <LinkSub text='Privacy Policy' />
                    <LinkSub text='Terms & Conditions' />
                </div>
            </div>
        </div>
        <div className='mx-56 py-3 border-t-2 border-gray-100 flex flex-wrap justify-between '>
            <p className='text-gray-400 '>&copy; 2024 - <a href='https://aprimregmi.com.np' target='_blank' className='hover:text-red-600'>aprimr.</a></p>
            <div className="flex gap-4">
                <Icons icon={"fa-brands fa-facebook"} link="https://facebook.com"/>
                <Icons icon={"fa-brands fa-instagram"} link="https://instagram.com"/>
                <Icons icon={"fa-brands fa-twitter"} link="https://x.com"/>
                <Icons icon={"fa-brands fa-discord"} link="https://discord.com"/>
                <Icons icon={"fa-brands fa-linkedin"} link="https://linkedin.com"/>
                <Icons icon={"fa-brands fa-github"} link="https://github.com"/>
            </div>
        </div>
    </div>
    </>
  )
}


function LinkHead({text}){
    return(
        <>
            <p className='font-bold uppercase text-gray-600'>{text}</p>
        </>
    )
}
function LinkSub({text,to}){
    return(
        <>
            <NavLink to={to} className='font-semibold text-gray-400 cursor-pointer hover:text-red-600 hover:underline'>{text}</NavLink>
        </>
    )
}
function Icons({icon, link}){
    return(
        <>
            <a href={link} target="_blank" className='text-gray-500 cursor-pointer hover:text-red-600'><i class={icon}></i></a>
        </>
    )
}