import React, { createContext, useState , useEffect } from 'react'
export const TokenAuthenticationResponsecontext=createContext()


function TokenAuth({children}) {
    

const [isAuthorized,setIsAuthorized]=useState(false)
    
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorized(true)
        }
        else{
            setIsAuthorized(false)
        }
    },[isAuthorized])

    
  return (
    <>
      <TokenAuthenticationResponsecontext.Provider value={{isAuthorized,setIsAuthorized}}>
        {children}
      </TokenAuthenticationResponsecontext.Provider>
    </>
  )
}

export default TokenAuth