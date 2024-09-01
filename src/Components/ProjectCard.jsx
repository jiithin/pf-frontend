import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'



import { SERVER_URL } from '../services/server_url';




function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className='mb-4 mx-auto shadow' style={{ width: '18rem', marginTop:'3rem' }}>
      <Card.Img variant="top" src={`${SERVER_URL}/uploads/${project?.projectImage}`} onClick={handleShow} />
      <Card.Body>
        <Card.Title>{project?.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        
        
        <Card.Text className=''>
        
        </Card.Text>
        <Button href={project?.website} className='btn btn-light shadow'>Demo</Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6} lg={12}>
                <img width={'100%'} className='image-fluid' src={`${SERVER_URL}/uploads/${project?.projectImage}`} alt="" />
                <p className='mt-2'>{project?.overview}</p>
                
                
                </Col>
                <div>
                 <p className='d-inline-flex p-1 shadow rounded-3 fw-bold' >{project?.languages}</p> 
                 </div>

            
            </Row>
            <div className='mt-2'>

              <a href={project?.github} target='_blank' className='me-3 btn text-dark'><i class="fa-brands fa-github fa-2x"></i></a>
              <a href={project?.website} target='_blank' className='me-3 btn text-dark'><i class="fa-solid fa-link fa-2x"></i></a>



                {/* <button className='btn' ><i class="fa-brands fa-github fa-2x"></i></button>
                <button className='btn' ><i class="fa-solid fa-link fa-2x"></i></button> */}
            </div>
            </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ProjectCard
