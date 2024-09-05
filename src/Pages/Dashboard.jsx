import React, { useEffect, useState } from 'react'
import{Row,Col} from 'react-bootstrap'
import Header from '../Components/Header'
import Myprojects from '../Components/Myprojects'
import Profile from '../Components/Profile'
import { Fade } from 'react-awesome-reveal';


function Dashboard() {

  const [userName,setUserName]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUserName(sessionStorage.getItem("username"))
    }else{
      setUserName("")
    }
  },[])
  return (
    <div>
      <Header insideDashBoard/>
      <Fade direction='up'>
      <Row style={{marginBottom:'35vh'}}>
        <h2 className='mt-4 mx-5'>Welcome <span className='text-success fw-bolder'> {userName}</span></h2>

        {/* my projects */}
        <Col sm={12} md={8} lg={9} >
          <Myprojects/>
        </Col>

        {/* profile */}
        <Col sm={12} md={4} lg={3} > 
        <Profile/>
        </Col>
      </Row>
        </Fade>
    </div>
  )
}

export default Dashboard
