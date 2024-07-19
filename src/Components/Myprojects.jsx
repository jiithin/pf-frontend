import React, { useContext, useEffect, useState } from 'react'
import AddProjects from './AddProjects'
import { getUserProjectAPI , deleteUserProjectAPI } from '../services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../ContextApi/ContextShare';


import EditProject from './EditProject';

import { SERVER_URL } from '../services/server_url';

function Myprojects() {
  const{editProjectResponse,setEditProjectResponse}=useContext(editProjectResponseContext)

  const{addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
  const[allProjects,setAllProjects]=useState([])

  const getUserProject=async()=>{
    const token =sessionStorage.getItem("token")
    if (token){
      const reqHeader={
        "Content-Type": "multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await getUserProjectAPI(reqHeader)
      if (result.status===200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
  
    }
  }
  
  useEffect (()=>{
    getUserProject()
  },[addProjectResponse,editProjectResponse])



  // handle delete ptoject
   const handleDelete= async(pid)=>{
   const token = sessionStorage.getItem("token")
      if (token){
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
      }
      const result = await deleteUserProjectAPI(pid,reqHeader)
      if(result.status===200){

      }else{
        toast(result.response.data)
      }
    }
  }



  return (
    <>
    
    <div className="card shadow p-3 mt-4 my-5">
      <div className="d-flex">
        <h2>My Projects</h2>
        </div>
        <div className='ms-auto'>
          <AddProjects/>
        </div>
        
        <div className='mt-4' >
          {/* collection of projects */}
          {allProjects.length>0?
          allProjects.map((project,index)=>(
            <div className="border d-flex align-items-center rounded p-3 mt-2">
              <img src={`${SERVER_URL}/uploads/${project?.projectImage}`} alt="defaultimage" style={{height:'50px'}}  className="rounded me-3" />

            <h5>{project?.title}</h5>
            <div className='d-flex ms-auto' >
              <EditProject project={project}/>

              <a href={project.github} target='_blank' className='btn text-dark'><i class="fa-brands fa-github"></i></a>

              <button className='btn' onClick={()=>handleDelete(project?._id)} ><i class="fa-solid fa-trash"></i></button>

            </div>
          </div>
          )):<p className='text-dark fw-bold'>No projects Added Yet!!</p>
          }
        </div>
    </div>
    
    </>
  )
}

export default Myprojects