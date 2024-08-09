import React from 'react'
import ContactImg from '../../assets/Contact.svg';

export default function contact() {
  return (
    <>
    <div className='w-screen flex gap-44 justify-start px-20 py-14'>
        <img className="w-1/2" src={ContactImg} alt="home" />
        <div className='flex gap-4 flex-col justify-center items-start' >
          <div className='text-3xl font-bold text-gray-600'><span className='text-red-600'>Contact</span></div>
          <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem iusto consectetur nisi voluptates harum cupiditate. A labore beatae consequatur repellendus libero earum dolorum accusantium eaque illo quis, soluta commodi.</p>
          <div className="flex gap-4 ">
                <Icons icon={"fa-brands fa-facebook"} />
                <Icons icon={"fa-brands fa-instagram"} />
                <Icons icon={"fa-brands fa-twitter"} />
                <Icons icon={"fa-brands fa-discord"} />
                <Icons icon={"fa-brands fa-linkedin"} />
                <Icons icon={"fa-brands fa-github"} />
            </div>
          <Button name="Send Message" icon="fa-regular fa-paper-plane" />
        </div>
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
function Icons({icon}){
  return(
      <>
          <p className='text-xl text-gray-500 cursor-pointer hover:text-red-600'><i class={icon}></i></p>
      </>
  )
}