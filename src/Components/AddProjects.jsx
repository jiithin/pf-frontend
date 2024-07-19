import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addProjectAPI } from '../services/allAPI';
import { addProjectResponseContext } from '../ContextApi/ContextShare';

function AddProjects() {
  //get context api
  const{addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)

  const[preview,setPreview]=useState("")

  const[fileStatus,setFileStatus]=useState(false)

  const [projectData,setProjectData]=useState({
    title:"", languages:"", github:"", website:"", overview:"", projectImage:""
  })
    console.log(projectData);



  const [show, setShow] = useState(false);
  //to delete the image from the preview plus clear the daat inside the forms
  const handleClose = () => {
    setShow(false);
    setProjectData({
      title:"", languages:"", github:"", website:"", overview:"", projectImage:""
    })
  };
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(projectData.projectImage.type=="image/png"||projectData.projectImage.type=="image/jpg"||projectData.projectImage.type=="image/jpeg"){
    console.log("generate url");
    setPreview(URL.createObjectURL(projectData.projectImage));
    setFileStatus(false)
  }else{
    console.log("Only upload the following formats jpeg/jpg/png")
    setFileStatus(true)
    setPreview("")
    setProjectData({...projectData,projectImage:""}) //empty because other types of files cant be upload or holded 
  }
  },[projectData.projectImage])



  
   //If any fields are missing pop an alert as toast
  const handleAddProject = async ()=>{
    const{title, languages, github, website, overview, projectImage}=projectData
    if(!title || !languages || !github || !website || !overview || !projectImage){
      toast("ℹ. Fill all the missing fields !")
    }else{
      // api call - req body
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",projectImage)
      
      //reqHeader 
      const token = sessionStorage.getItem("token")
      console.log(token);
      if(token){
        const reqHeader={
          "Content-Type": "multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        // api call
        try{
          const result = await addProjectAPI(reqBody,reqHeader)
          console.log(result);
          if (result.status===200){
            handleClose()
            setAddProjectResponse(result.data);
            
          }else{
            toast.warning(result.response.data)
          }

        }catch (err){
          console.log(result);

        }
      }
    }
  }



  return (
    <>
     <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
            
                <div className="col-6">
                <label>
                    <input type="file" style={{display:'none'}} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} />
                    <img width={'100%'} height={''} src={preview?preview:"https://www.svgrepo.com/show/363704/image-square-duotone.svg"} alt="photo" />
                </label>
                {fileStatus&& <div className="text-primary text-center fw-bold">Please upload jpeg/jpg/png formats</div>}
                </div>


                <div className="col-6">
                    <div className="mt-4">
                <input type="text" placeholder="Project Title" className='form-control' value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})}/>
                </div>
                <div className="mt-4">
                <input type="text" placeholder="Languages Used" className='form-control' value={projectData.languages} onChange={e=>setProjectData({...projectData,languages:e.target.value})}/>
                </div>
                <div className="mt-4">
                <input type="text" placeholder="Github Link" className='form-control' value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})}/>
                </div>
                <div className="mt-4">
                <input type="text" placeholder="Website Link" className='form-control' value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})}/>
                </div>
                <div className="mt-4">
                <input type="text" placeholder="Project Overview" className='form-control' value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})}/>
                </div>

                </div>
                
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddProject}>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      pauseOnHover
      theme="light"
       />

    </>
  )
}

export default AddProjects