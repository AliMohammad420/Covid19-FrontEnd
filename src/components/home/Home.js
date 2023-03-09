import React,{useContext} from 'react'
import { StaticsCards } from './StaticsCards'
import './Home.css'
import { StaticsCountry } from './StaticsCountry'
import {CountryCard} from './CountryCard'
import {CovidContext} from '../context/CovidContext'
export const Home = () => {
  const {covid, error} = useContext(CovidContext)
  return (
    <div className='main-home-container'>
        <StaticsCards />
        <StaticsCountry />
        <div className='card-holder'>
        {
          covid.length ? 
          covid.map((item, index)=>
             <CountryCard key={index} date={item.Date} cases={item.Cases} />
             ) : <h1>{error}</h1>
             
        }
        </div>
    </div>
  )
}
