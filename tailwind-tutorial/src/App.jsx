import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserProfile } from './pages/UserProfile/UserProfile'
import { JobList } from './pages/JobList/JobList'
import { Account } from './pages/Account/Account'
import { Collections } from './pages/Collections/Collections'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/shared/Layout'
import { Dashboard } from './components/shared/Dashboard'
import { User } from './components/shared/User'
import Products from './pages/Shop/Products'
import Orders from './pages/Shop/Orders'
import Settings from './pages/Shop/Settings'

function App() {


  return (
    // <div className='w-full h-screen bg-[#e4f8f8] flex items-center justify-center'>
    //   {/* <UserProfile></UserProfile> */}
    //   <Collections></Collections>
    // </div>
    <Router>
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout></Layout>} >
          <Route index element={<Dashboard />} />
          <Route path='products' element = {<Products></Products>} />
          <Route path='orders' element = {<Orders></Orders>} />
          <Route path='settings' element = {<Settings></Settings>} />
        </Route>
      </Routes>
    </div>
    </Router>

    // <div>
    // <input type="text" 
    // value={job}
    // onChange={e => setJob(e.target.value)}  
    // className='p-2 m-5 border-2 border-black'/>

    // <button className='bg-green-300 p-2 rounded-lg hover:bg-red-500' 
    // onClick={handleButton}> Add  </button>

    // <ulb className='p-3'>
    //   {jobs.map((job, index) => (
    //     <li className='ml-5' key ={index}>{job}</li>
    //     ))}
    // </ulb>
    // </div>
  )
}

export default App;
