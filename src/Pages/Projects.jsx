 import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Row,Col } from 'react-bootstrap'
import { getAllUserProjectAPI } from '../services/allAPI'
import { Fade } from 'react-awesome-reveal'



function Projects() {


  //search
  const[searchKey,setSearchKey]=useState("")





  const[allProjects,setAllProjects]=useState([])

  const getAllUserProject=async()=>{
  const token =sessionStorage.getItem("token")
  if (token){
    const reqHeader={
      "Content-Type": "multipart/form-data",
      "Authorization":`Bearer ${token}`
    }
    const result = await getAllUserProjectAPI(searchKey,reqHeader)
    if (result.status===200){
      setAllProjects(result.data)
    }else{
      console.log(result);
    }
  }
}

useEffect (()=>{
  getAllUserProject()
},[searchKey])

  return (
    <>
    <Header insideprojects/>
     <Fade direction='up'>
    <div className='projects'>
      <h1 className='p-4' style={{textAlign:'center'}}>All Projects</h1>
      <div className="d-flex justify-content-center align-items-center">
       <div className="d-flex border w-75 mb-2 mt-2">
        <input type="text" className='form-control'   placeholder='Search by technology...' onChange={e=>setSearchKey(e.target.value)} />
        <i style={{marginLeft:'-50px',marginTop:'15px'}} class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      
      <Row className='mt-4 container-fluid p-3 ms-auto' style={{marginBottom:'35vh'}}>
      
        {allProjects.length>0?
        allProjects.map((project,index)=>(
        
           <Col sm={12} md={6} lg={4}>

           <ProjectCard className={"ProjectCard"} project={project}/>

           </Col>
        )):<div className='d-flex justify-content-center align-items-center'>Nothing to Display</div>
      }
        
      </Row>
    </div>
     </Fade>
    </>
    
  )
}

export default Projects
