import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import UserContext from './UserContext';

function UserView() {

  const userContext = useContext(UserContext)

    let params= useParams()
  return (
    <>UserView
    <h2> 
      {userContext.users[params.id].name}
      
      </h2></>
  )
}

export default UserView