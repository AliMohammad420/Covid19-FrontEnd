 import axios from 'axios'
import React, { useEffect, useState } from 'react'

 
 export const StaticsCards = () => {
    const [statics, setStatics] = useState({});
    useEffect(() => {
        axios.get('https://api.covid19api.com/world/total').then(resolve => setStatics(prev => prev = resolve.data))
        .catch(rejected => setStatics(prev => prev = rejected));
    },[])
   return (
     <div className='main-container'>
        <h3 className='statics-heading'>World total Statics</h3>
        <div className='statics-container'>
        <label className='statics'>Total Confirmed: {statics.TotalConfirmed}</label>
        <label className='statics'>Total Deaths: {statics.TotalDeaths}</label>
        <label className='statics'>Total Recoverd: {statics.TotalRecovered}</label>
        </div>
     </div>
   )
 }
 