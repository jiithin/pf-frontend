import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted fixed-relative'>



{/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
  <div className='me-5 d-none d-lg-block'>
    <span>Get connected with us on social networks:</span>
  </div>

  <div>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="facebook-f" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="twitter" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="google" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="instagram" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="linkedin" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="github" />
    </a>
  </div>
</section> */}


<section className=''>
  <MDBContainer className='text-center text-md-start mt-5 p-4'>
    <MDBRow className='mt-3'>
      <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-4'>
        <h5 className='text-uppercase fw-bold mb-4'>
          <i class="fa-solid fa-diagram-project"></i> 
          Project Fair
        </h5>
        <p>
        This platform allows you to showcase your web projects. It has a dedicated section for Display websites and Project page websites.
        </p>
      </MDBCol>

      <MDBCol md="4" lg="2" xl="2" className='mx-auto mb-4'>
        <h5 className='text-uppercase fw-bold mb-4'>Links</h5>
        
        <p >
        <Link to={'/'} style={{textDecoration:'none'}} >
            Home
          </Link>
        </p>

        <p>
        <Link to={'/login'} style={{textDecoration:'none'}}>
            Login
          </Link>
        </p>

        <p><Link to={'/register'} style={{textDecoration:'none'}}>
            Register
          </Link>
        </p>
      
      </MDBCol>


      

      <MDBCol md="4" lg="4" xl="5" className='mx-auto mb-md-0 mb-4'>
        <h5 className='text-uppercase fw-bold mb-4'>Connect with Us</h5>
        <form action=''>
    <MDBRow>
      

      <MDBCol size='auto' className='mb-4 mb-md-0'>
        <MDBInput type='email' id='email1' label='' placeholder='Enter your email' />
      </MDBCol>

      <MDBCol size='auto' className='mb-4 mb-md-0 ms-auto'>
        <button className='btn btn-primary'>Subscribe</button>
      </MDBCol>
    </MDBRow>
  </form>


  
      <br />
        <a href='' className='ms-4 me-4 text-reset'>
        <MDBIcon fab icon="google" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="instagram" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="linkedin" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="github" />
    </a>

   

      </MDBCol>
    </MDBRow>
  </MDBContainer>

  




</section>

<div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
  © 2024 Copyright:
  <a className='text-reset fw-bold' href='https://mdbootstrap.com/' style={{textDecoration:'none'}}>
    Project Fair
  </a>
</div>
</MDBFooter>
    </>
  )
}

export default Footer
