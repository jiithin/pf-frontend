import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// register api
export const registerAPI = async(users)=>{
    return await commonAPI('POST',`${SERVER_URL}/user/register`,users,"")
}


//login api
export const loginAPI = async(users)=>{
    return await commonAPI('POST',`${SERVER_URL}/user/login`,users,"")
}


//Add Project api
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/addprojects`,reqBody,reqHeader)
}


//getHomeProject api (only three will show up becoz we put a limit in project controller)
export const getHomeProjectAPI = async()=>{
    return await commonAPI('GET',`${SERVER_URL}/homeprojects`,"","")
}


//getAllUserProjects   + search as query parameter
export const getAllUserProjectAPI = async(searchKey,reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/alluserprojects?search=${searchKey}`,"",reqHeader)
}


//getUserProjects
export const getUserProjectAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/userprojects`,"",reqHeader)
}



//editUserProjects
export const editUserProjectAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${SERVER_URL}/projects/edit/${id}`,reqBody,reqHeader)
}


//deleteUserProjects
export const deleteUserProjectAPI = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/projects/remove/${id}`,{},reqHeader)
}
