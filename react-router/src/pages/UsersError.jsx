import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

export const UsersError = () => {
  const errorMessage = useRouteError();
  return (
    <div className='usersError'>
        <h2>Error :</h2>
        <p>{errorMessage.message}</p>
        <Link to="/">Home <i className="fa-solid fa-backward"></i></Link>
    </div>
  )
}
