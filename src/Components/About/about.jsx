import React from 'react'
import AboutImg from '../../assets/About.svg';

export default function about() {
  return (
    <>
    <div className='w-screen flex gap-44 justify-start px-20 py-14'>
        <img className="w-1/2" src={AboutImg} alt="home" />
        <div className='flex flex-col justify-center items-start' >
          <div className='mb-3 text-3xl font-bold text-gray-600'><span className='text-red-600'>About</span></div>
          <p className='mb-3 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem iusto consectetur nisi voluptates harum cupiditate. A labore beatae consequatur repellendus libero earum dolorum accusantium eaque illo quis, soluta commodi.</p>
          <Button name="Portfolio" icon="" />
        </div>
    </div>
    </>
  )
}

function Button({name,icon}){
  return(
    <>
      <button className='px-14 py-3 rounded text-lg border-2 border-red-600 bg-red-600 text-white font-semibold hover:bg-white hover:text-red-600'>{name}<i class={icon}></i></button>
    </>
  )
}

