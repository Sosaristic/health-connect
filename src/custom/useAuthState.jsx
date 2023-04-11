import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constant'

function useAuthState() {
   const [isAuth,setIsAuth] =  useState(false)
    
   useEffect(()=>{
        const token = sessionStorage.getItem('token')
        if(!token) {
            setIsAuth(false)
        }
        else {
            setIsAuth(true)
        }
   },[isAuth])

   const signUp = async(input)=>{
    const user = {
        first_name:input.firstname,
        last_name:input.lastname,
        password:input.password,
        role:input.role,
        email:input.email
    }
    try{
        const {data} = await axios.post(`${API_URL}/api/v1/signup/`,user)
        console.log({data})
    }
    catch(error){
        console.log({error:error.response.data.email})
    }
}


const logIn = async (input)=>{
    const user={
        email:input.email,
        password:input.password,
        role:input.role
    }
    try{
        const {data} = await axios.post(`${API_URL}/api/v1/signin/`,user)
        console.log({data})
        sessionStorage.setItem('token',data.access)
        setIsAuth(true)
    }
    catch(error){
        console.log({error:error})
        setIsAuth(false)
    }
 
}

const signOut = ()=>{
    sessionStorage.clear()
    setIsAuth(false)
    console.log('Logged out')
 }

  return { logIn , isAuth , signUp,signOut}
}

export default useAuthState