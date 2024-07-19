import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';



function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <>

    <div className='p-2 mt-3 my-4'>
        <div className="card shadow p-3 ">
            <div className="d-flex justify-contect-between">
                <h2>Profile</h2>
                <button className='btn btn-block btn-light ms-auto' onClick={() => setOpen(!open)}>
                <i class="fa-solid fa-chevron-down"></i>
                </button>
            </div>
            <Collapse in={open}>
            <div className="row justify-content-center mt-3">
                <label>
                    <input type="file" style={{display:'none'}} />
                    <img width={'100%'} height={''} src="https://www.svgrepo.com/show/496707/user-square.svg" alt="profile" />
                </label>
                <div>
                    <input type="text" placeholder="Github Link" className='form-control'/>
                    <br />
                    <input type="text" placeholder="LinkedIn Link" className='form-control'/>
                </div>
                <div className='d-grid m-2'>
                    <button className='btn btn-success'>Update</button>
                </div>
            </div>
            </Collapse>
        </div>
        

    </div>

    </>
  )
}

export default Profile