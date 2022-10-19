import React from 'react'

const Nav = () => {
  return (
 <header>
  <div className="flex justify-between items-center bg-[#fef300] ">

    <img src="STI_Logo.png" alt="" height="90" width="90" className="rounded-full"/>

    <div className=" items-center justify-between w-[459px] hidden sm:flex"> 
    <span className="text-xl">Student Council </span> 
    <span className="text-5xl">e-Voting</span> 
     <h1 className="text-xl">system</h1>
    </div>
    <div></div>
  </div>
 </header>
  )
}

export default Nav