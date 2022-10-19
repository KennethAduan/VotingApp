import {React,useState} from 'react'
import {Link } from "react-router-dom";
import Sidebar from './Voter-UI/Sidebar'
const Login = () => {
  const [name, setName] = useState(" ")
  const [studentID, setStudentID] = useState(" ")
  const handleClick = () => {
    <Sidebar name={name} studentID={studentID}/>
  }
  return (
    <>
    <section className="h-screen App bg-gradient-to-r from-cyan-500 to-blue-500 " >
      <div className="px-6 h-full text-gray-800 ">
        <div
          className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
        >
          <div
            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 drop-shadow-2xl " >
            <img 
              src="./STI_Login_Logo.jpg"
              className="w-full rounded-lg"
              alt="Sample image"
             
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            
            <form>
            <div className ="p-10 flex item-center justify-center " >
            <img src="STI_Logo.png" alt="Logo" width = "100" height= "20" className='rounded-lg' />
            </div>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="name"
                  placeholder="Student ID/Number"
                  onInput={e => setStudentID(e.target.value)}
                />
              </div>
    
    
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Student Name"
                  onInput={e => setName(e.target.value)}
                />
              </div>
              <div className="text-center lg:text-end">
                <Link to = "/dashboard" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                onClick={handleClick}> Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </section></>

  )
}

export default Login