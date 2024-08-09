import React from 'react'
import HomeImg1 from '../../assets/Home-1.svg';
import HomeImg2 from '../../assets/Home-2.svg';

export default function home() {
  return (
    <>
    <div className='w-screen flex gap-44 justify-start px-20 py-14'>
        <img className="w-1/2" src={HomeImg1} alt="home" />
        <div className='flex flex-col justify-center items-start' >
          <div className='mb-3 text-3xl font-bold text-gray-600'>React<span className='text-red-600'>Router</span></div>
          <p className='mb-3 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem iusto consectetur nisi voluptates harum cupiditate. A labore beatae consequatur repellendus libero earum dolorum accusantium eaque illo quis, soluta commodi.</p>
          <Button name="Download Now" icon="fa-brands fa-google-play" />
        </div>
    </div>
    <div className='w-screen flex gap-44 justify-start px-20 py-14'>
        <div className='flex flex-col justify-center items-start' >
          <div className='mb-3 text-3xl font-bold text-gray-600'>Router<span className='text-red-600'>Team</span></div>
          <p className='mb-3 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem iusto consectetur nisi voluptates harum cupiditate. A labore beatae consequatur repellendus libero earum dolorum accusantium eaque illo quis, soluta commodi.</p>
          <Button name="View Team " icon="fa-solid fa-arrow-right" />
        </div>
        <img className="w-1/2" src={HomeImg2} alt="home" />
    </div>
    </>
  )
}


function Button({name, icon}){
  return(
    <>
      <button className='px-14 py-3 rounded text-lg border-2 border-red-600 bg-red-600 text-white font-semibold hover:bg-white hover:text-red-600'>{name} <i class={icon}></i></button>
    </>
  )
}