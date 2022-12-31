import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <h1 className='pageheading'>DASHBOARD</h1>
    <div className='dashboardpage'>
      <div className='container2'>
        <div className='topicbutton'>
        <Link to={"/home/addtopic"} className='btn btn-lg btn-light'>Add Topic</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard