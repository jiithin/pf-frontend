import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { TokenAuthenticationResponsecontext } from '../ContextApi/TokenAuth';


function Header({insideDashBoard,insideprojects}) {


  //handle logout
  const navigate = useNavigate()
  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthenticationResponsecontext)
  const handleLogout=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    setIsAuthorized(false)
    navigate('/')
  }


  return (
    <>
     <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-diagram-project"></i> Project Fair</Link>
          
            
          </Navbar.Brand>
          {insideprojects&&<Link className='btn btn-dark ms-auto mb-2' to={'/dashboard'}>Manage Projects</Link>}
          {/* {insideprojects&& <button className='btn btn-light mb-2'>Log Out</button>} */}

           {insideDashBoard&& <Link className='btn btn-dark ms-auto mb-2 me-3' to={'/projects'}>View Projects</Link>}
           {insideDashBoard&& <button className='btn btn-light mb-2' onClick={handleLogout}>Log Out</button>}
         
        </Container>
      </Navbar>

   
    </>
  )
}

export default Header