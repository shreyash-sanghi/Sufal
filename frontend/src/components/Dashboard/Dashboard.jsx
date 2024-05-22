import React from 'react'
import { Link ,NavLink} from 'react-router-dom';
import DashboardNav from './DashboardNav';



const Dashboard = ()=>{
    return(
        <>
      <div className='flex bg-gray-800'>
        <DashboardNav/>
      </div>
        </>
    )
}

export default Dashboard;