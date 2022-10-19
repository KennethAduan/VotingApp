import React from 'react'
import Nav from '../Voter-UI/Nav'
import Sidebar from '../Voter-UI/Sidebar'
import Candidates from '../Voter-UI/Candidates'
const dashboard = () => {
  return (
    <>
    
      <Nav/>
     <div className="flex h-1000 App bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <Sidebar name="Aduan" studentID="23424"/>
        <div className="w-full h-[800px] flex items-start justify-start p-5 flex-col">
          <h1 className="text-3xl mb-3">President Candidates</h1>
          <div className="w-full flex justify-between items-center mb-4">
            <Candidates name="Kenneth B. Aduan" position = "President" />
            <Candidates name="Kenneth B. Aduan" position = "President" />
            <Candidates name="Kenneth B. Aduan" position = "President" />
          </div>
          <h1 className="text-3xl mb-3">Vice President Candidates</h1>
          <div className="w-full flex justify-between items-center mb-4">
            <Candidates name="Kenneth B. Aduan" position = "President" />
            <Candidates name="Kenneth B. Aduan" position = "President" />
            <Candidates name="Kenneth B. Aduan" position = "President" />
          </div>
          <h1 className="text-3xl mb-3">Secretary Candidates</h1>
          <div className="w-full flex justify-between items-center mb-4">
            <Candidates name="Kenneth B. Aduan" position = "President" />
            <Candidates name="Kenneth B. Aduan" position = "President" />
            <Candidates name="Kenneth B. Aduan" position = "President" />
          </div>
          <h1 className="text-3xl mb-3">Treasurer Candidates</h1>
          <div className="w-full flex justify-between items-center mb-4">
            <Candidates name="Kenneth B. Aduan" position = "President" />
            <Candidates name="Kenneth B. Aduan" position = "President" />
            <Candidates name="Kenneth B. Aduan" position = "President" />
          </div>

        </div>
     </div>
     
    
   
    </>
  )
}

export default dashboard
 