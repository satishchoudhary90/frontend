import React from 'react'
import { FiSearch } from "react-icons/fi";
import s from './navbar.module.css'

const Navbar = () => {
  return (
    <nav class={`${s.nav } navbar position-fixed top-0 start-0 z-4`}>
  <div class="container-fluid d-flex flex-column flex-lg-row gap-2">
    <div className='navbar-brand d-flex gap-2'>
      <img src="/logo.png" alt="logo" width={60} />
      <div className='d-flex flex-column'>
        <span class="navbar-brand-name d-block">भारतीय प्रौद्योगिकी संस्थान मुंबई</span>
        <span class="navbar-brand-slogan d-block">Indian Institute of Technology Bombay</span>
      </div>      
    </div>
    <form class="d-none d-md-flex justify-content-end pe-4" role="search">
        <input style={{width: '300px'}} class={`${s.in} text-center py-1 px-3 rounded me-2`} type="search" placeholder="Search Courses ..." aria-label="Search"/>
      </form>
  </div>
</nav>
  )
}

export default Navbar
