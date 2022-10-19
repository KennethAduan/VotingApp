import React from 'react'

const Candidates = ({name,position,img}) => {
  return (
<>
<div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-100">
    <div className="flex justify-end px-4 pt-4">
       
       
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={img} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{position}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{name}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">VOTE</a>
           
        </div>
    </div>
</div>
</>
  )
}

export default Candidates