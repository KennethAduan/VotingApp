import React from 'react'
import {Link} from 'react-router-dom'

const  Sidebar= ({name,studentID}) => {
  return (
    <>
        
<aside className="w-64 bg-gray-800" aria-label="Sidebar">

    <div className="p-4 flex justify-around items-center">
        <div className="flex flex-col">
            <h1 className="text-white ">{name}</h1>
            <h1 className="text-white ">{studentID}</h1>
        </div>
       

    </div>
   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded h-[1500px] dark:bg-gray-800 flex flex-col justify-between">
    <div></div>
      <ul className="space-y-2">
      <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9.5 1.293a6.47 6.47 0 0 0-6.462 6.46v3.002l-1.5-1.5-1.5 1.5 3.991 3.951 4.009-3.951-1.5-1.5-1.5 1.5v-3c0-2.46 2.001-4.462 4.462-4.462s4.462 2.001 4.462 4.462a4.468 4.468 0 0 1-1.458 3.298l1.348 1.479a6.476 6.476 0 0 0 2.11-4.777A6.47 6.47 0 0 0 9.5 1.293z"/></svg>
               <Link to="/" className="flex-1 ml-3 whitespace-nowrap">Reset</Link>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <Link to="/" className="flex-1 ml-3 whitespace-nowrap">Log out</Link>
            </a>
         </li>
        
         
        
      </ul>
   </div>
</aside>

    
    </>
  )
}

export default Sidebar