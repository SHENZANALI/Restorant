import React from 'react'
import { Link } from 'react-router-dom'
import FastfoodIcon from '@mui/icons-material/Fastfood';

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <Link class="navbar-brand mx-3 icon-red " to="/"> <FastfoodIcon className='icon'/> My Restaurant</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul className='navbar-nav m-auto'>
            <li className='nav-item'>
              <Link className='nav-link ' to={'/'}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/about'}>About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/menu'}>Menu</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/contact'}>Contact</Link>
            </li>
          </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header