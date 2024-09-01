import React, { useEffect , useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import titleimage from '../assets/images/web4.gif'
import titleimage1 from '../assets/images/projects.svg'
import ProjectCard from '../Components/ProjectCard'
import { Link , useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../services/allAPI'
import Header from '../Components/Header'



import {
  HomeContainer,
  HomeLeft,
  HomeRight,
  Image,
  HomeWrapper,
  HomeFirst,
} from "./HomeElements";
import { Fade, Slide } from 'react-awesome-reveal'



function Home() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)

  const[allprojects,setAllProjects]=useState([]) //for diplaying any 3 projects in home

  const navigate=useNavigate()


  //getting 3 projects from database while rendering home page
  const getHomeProjects=async()=>{
    const result=await getHomeProjectAPI()
    if (result.status===200){
      setAllProjects(result.data)
    }else{
      console.log(result);
    }
  }
  console.log(allprojects);




  useEffect(()=>{
    getHomeProjects() //home page projects to be displayed using useEffect
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
    
  },[])

  const handleProjectsPage=()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else{
      toast("⚠ Please Login.")
    }
  }


  return (
    <>
    <Header/>
    {/* <div style={{height:'90vh'}} className=' d-flexcontainer-fluid rorunded bg-white mt-5'>
    <Row className='ms-auto align-items-center p-5 '>
    <Col sm={12} md={6}>

      <h1 style={{fontSize:'80px'}} className='align-items-center'>Project Fair</h1>
      <p>This platform allows you to showcase your web projects. It has a dedicated section for Display websites and Project page websites. These sections showcase websites created by the web-dev community and professional designers. You can get inspired and start planning your perfect web design today!</p>
      
      
      {isLoggedIn? <Link to={'/dashboard'} className='btn btn-success shadow'>Dashboard</Link>:
      <Link to={'/login'} className='btn btn-primary me-3'>Explore</Link>
      }
      


      </Col>
      <Col sm={12} md={6}>
      <img width={'100%'} height={'470px'} src={titleimage} alt="" />
      </Col>

     </Row>
    </div> */}

    {/* body */}
    <HomeContainer id="home">
        <HomeWrapper>
        <HomeFirst>
            <Slide>
              <Image
                src={titleimage1} alt="title image1"
              />
            </Slide>
          </HomeFirst>
          <HomeLeft >
            <Slide >
            <h1 style={{fontSize:'55px'}} className='align-items-left fw-bold'>Project Fair</h1>
            <p className='text-dark'>This platform allows you to showcase your web projects. It has a dedicated section for Display websites and Project page websites. These sections showcase websites created by the web-dev community and professional designers. You can get inspired and start planning your perfect web design today!</p>
            {isLoggedIn? <Link to={'/dashboard'} className='btn btn-success shadow'>Dashboard</Link>:
             <Link to={'/login'} className='btn btn-primary me-3'>Explore</Link>
            }


            </Slide>

          </HomeLeft>
          <HomeRight>
            <Fade delay={500} damping={0.1}>
              <Image
                src={titleimage} alt="title image" 
              />
            </Fade>
          </HomeRight>
        </HomeWrapper>
        
      </HomeContainer>
    


    {/* All Projects */}


    <div className="all-projects mt-5">
      <h1 className='text-primary fw-bolder text-center' style={{marginBottom:'5rem'}}>Explore Your Projects</h1>

      <Fade direction='left'>
           <Row className='mt-3'>
           {allprojects.length>0?
            allprojects.map((project,index)=>(
               <Col key={index} sm={12} md={6} lg={4} >
                <ProjectCard project={project}/>
                </Col>
             )):null
             }
          

             {/* <Col sm={12} md={6} lg={4} >
              <ProjectCard/>
             </Col>

             <Col sm={12} md={6} lg={4} >
              <ProjectCard/>
             </Col> */}
        
             </Row>
      </Fade>
  
      
      <div style={{textAlign:'center', paddingBottom:'50px'}}>
        <p className='d-flex justify-content-center mt-5 btn ' onClick={handleProjectsPage}>View More Projects</p>
      </div>

      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      pauseOnHover
      theme="light"
       />

    </div>



    </>
  )
}

export default Home
