import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='loginpage'>
    <Link to={"/home"} className='btn btn-lg btn-light'>Login</Link>
    </div>
  )
}

export default Login