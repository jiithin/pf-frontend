import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SERVER_URL } from '../services/server_url';
import { editUserProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../ContextApi/ContextShare';



function EditProject({ project }) {

  console.log(project);

  //get context
  const{editProjectResponse,setEditProjectResponse}=useContext(editProjectResponseContext)

  const [preview, setPreview] = useState("")

  const [projectData, setProjectData] = useState({
    id: project._id,
    title: project.title,
    languages: project.languages,
    github: project.github,
    website: project.website,
    overview: project.overview,
    projectImage: "",
  });



  useEffect(() => {
    if (projectData.projectImage) {
      setPreview(URL.createObjectURL(projectData.projectImage))
    } else {
      setPreview("")
    }
  }, [projectData.projectImage]);


  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    setProjectData({
      id: project._id,
      title: project.title,
      languages: project.languages,
      github: project.github,
      website: project.website,
      overview: project.overview,
      projectImage: "",
    })
    setPreview("")
  };

  const handleShow = () => setShow(true);


  const handleUpdate = async ()=>{
    const{ id, title, languages, github, website, overview, projectImage }=projectData;
    if(!title || !languages || !github || !website || !overview ){
      toast("ℹ. Fill all the missing fields !")
    }else{
      // api call - req body
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      preview? reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)
      
      //reqHeader 
      const token = sessionStorage.getItem("token")
      console.log(token);
      if(token){
        const reqHeader={
          "Content-Type":preview? "multipart/form-data":"application/json",
          "Authorization":`Bearer ${token}`
        }
        //api call
        try{
          const result = await editUserProjectAPI(id,reqBody,reqHeader)
          console.log(result);
          if (result.status===200){
            setEditProjectResponse(result.data)
            handleClose()

          }
          toast(result.response.data)
        }catch(err){
          console.log(err);
        }
      }
    }
  }



  return (
    <>
      <div>
        <Button variant="link" onClick={handleShow}><i class="fa-solid fa-pen-to-square"></i></Button>

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
                  <input type="file" style={{ display: 'none'}}
                  onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})}/>
                  <img width={'100%'} height={''} src={preview ? preview : `${SERVER_URL}/uploads/${project?.projectImage}`} alt="photo" />
                </label>

              </div>


              <div className="col-6">
                <div className="mt-4">
                  <input type="text" placeholder="Project Title" className='form-control'
                    value={projectData.title}
                    onChange={e => setProjectData({ ...projectData,title:e.target.value })} />
                </div>
                <div className="mt-4">
                  <input type="text" placeholder="Languages Used" className='form-control'
                    value={projectData.languages}
                    onChange={e => setProjectData({ ...projectData,languages:e.target.value })} />
                </div>
                <div className="mt-4">
                  <input type="text" placeholder="Github Link" className='form-control'
                    value={projectData.github}
                    onChange={e => setProjectData({ ...projectData,github:e.target.value })} />
                </div>
                <div className="mt-4">
                  <input type="text" placeholder="Website Link" className='form-control'
                    value={projectData.website}
                    onChange={e => setProjectData({ ...projectData,website:e.target.value })} />
                </div>
                <div className="mt-4">
                  <input type="text" placeholder="Project Overview" className='form-control'
                    value={projectData.overview}
                    onChange={e => setProjectData({ ...projectData,overview:e.target.value })} />
                </div>

              </div>

            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleUpdate}>Upadte</Button>
          </Modal.Footer>
        </Modal>

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

export default EditProject