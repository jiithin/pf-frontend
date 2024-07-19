import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import titleimage from '../assets/images/web5.gif'
import Header from './Header';

import Spinner from 'react-bootstrap/Spinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { loginAPI, registerAPI } from '../services/allAPI';



import { TokenAuthenticationResponsecontext } from '../ContextApi/TokenAuth';


function Auth({register}) {

  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthenticationResponsecontext)

  const isRegisterForm=register?true:false

  const [loginStatus,setLoginStatus]=useState(false)

  const navigate= useNavigate()
  const [userData,setUserData]=useState({
    username:"",email:"",password:""
  })

  // // handele register
   const handleRegister=async (e)=>{
    e.preventDefault()
    console.log(userData);
    //validation
    const{username,email,password}=userData
    if(!username || !email || !password){
      toast("ℹ. Please fill all the missing fields!")
    }else{
      //toast.success("Proceed to API call")
      try{
        const result =await registerAPI(userData)
        console.log(result);
        if(result.status===200){
          toast.success(`${result.data.username} has successfully registered`)
          setUserData({
            username:"",email:"",password:""
          })
          setTimeout(()=>{
            navigate('/login')
          },3000);
        }else{
          toast.warning(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }
}

    // // handel login
   const handleLogin=async(e)=>{
    e.preventDefault()
    const{email,password}=userData
    if(!email || !password){
      toast("ℹ. Fill all the missing fields.")
    }else{
      // toast.success("Login successful.")
      try{
        const result =await loginAPI({email,password})
        console.log(result);
        if(result.status===200){
          setLoginStatus(true)
          sessionStorage.setItem("username",result.data.existingUser.username)
          sessionStorage.setItem("token",result.data.token)
          setIsAuthorized(true)
          setUserData({
            email:"",password:""
          })
          setTimeout(()=>{
          navigate('/')  
          setLoginStatus(false)
          },2000);
          

        }else{
          toast.error(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }
}

  return (
    <>
    <Header/>
    <div className='d-flex justify-content-center align-items-center mb-5'>
      <div className='w-80 container'>
        <h3 className='btn btn-light mt-3 my-3'><Link to={'/'} style={{textDecoration:'none', fontSize:'23px'}}><i class="fa-solid fa-arrow-left"></i> Home</Link></h3>
        <div className="card shadow p-4 bg-light">
          <div className="row alig-items-center">
            <div className="col-lg-6 ">
              <img src={titleimage} alt="" className='rounded-start w-100' />
            </div>

            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-coloumn">
              
                <Form>
                <h2 className='fw-bold text-dark mt-2'><i class="fa-solid fa-diagram-project"></i> Project Fair</h2>

                <h5>{isRegisterForm?'Sign up to your account':'Sign in to your account'}</h5>
                
                  {isRegisterForm&&
                  <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Username"
                  onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} />
    
                </Form.Group>
                  }
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" 
                  onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                </Form.Group>
          
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" 
                   onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} />
                </Form.Group>

                {isRegisterForm&&
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I accept Terms and Conditions" />
                </Form.Group>
                }

                {
                isRegisterForm?
                <div>
                  <button onClick={handleRegister} className='btn btn-success mb-2 shadow'>Register</button>

                <p>Already have an account? CLick here to <Link to={'/login'} style={{textDecoration:'none',color:'green'}}>Login</Link></p>
                </div>:
                <div>
                <button onClick={handleLogin} className='btn btn-primary mb-2 mt-2'>Login {loginStatus&& <Spinner animation="grow"  size="sm" />}</button>
              <p>New User? CLick here to <Link to={'/register'} style={{textDecoration:'none',color:'green'}}>Register</Link></p>
              </div>
                 }
                
            
                </Form>
               
              </div>

            </div>

          </div>

        </div>
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

export default Auth