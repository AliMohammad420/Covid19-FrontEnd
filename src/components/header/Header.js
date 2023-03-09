import React from 'react'
import { NavBar } from './NavBar'
import './Header.css'

export const Header = () => {
  return (
    <div>
        <div className='main-heading'>
          <div className='primary-head-container'>
          <label className='main-heading-label'>Covid-19</label>
          <span className='logo'>19</span>           
          </div>
          <label className='secondery-heading-label'>Covid-19 Statistics</label>            
          <label className='third-heading-label'>A website to provide you with all the updated on Covid-19 statistics around the world</label>            
        </div>
        <NavBar />
    </div>
  )
}
