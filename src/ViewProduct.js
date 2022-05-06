import React,{ useContext }  from 'react'
import { useParams } from "react-router-dom"; 
import UserContext from './UserContext';
function ViewProduct() {

  
  const userContext = useContext(UserContext)
    let params=useParams()
  return (
    <div>{userContext.users[params.id].name}</div>
  )
}

export default ViewProduct






