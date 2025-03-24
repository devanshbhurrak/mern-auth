import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import axios from 'axios';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg-img.png")] bg-cover bg-center'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home