import axios from "axios";
import React from "react";
const Swal = require("sweetalert2");

export const AllCountriesCard = ({
 country,cases, date,death,recovered,
}) => {
 const add = (country, date) => {
  axios.post('https://covid-19-kmv5.onrender.com/covid', {
    country,date
  }).then((res) => {
    Swal.fire({
      icon: "success",
      title: "Added to your records!",
      showConfirmButton: false,
      timer: 1500,
    });
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  );
};

 


  
 return (
  <div className="countryContainer">
   <div className="line-color">''</div>
   <div className="dataContainer">
    <label className="country-label">Country: {country}</label>
    <label>Total Confirmed cases: {cases}</label>
    <label>Total Deaths cases: {death}</label>
    <label>Total Recovered cases: {recovered}</label>
    <label className="date-label">Date: {date}</label>
    <button className="add-records" onClick={() => add(country, date)}>
     ADD TO MY RECORDS
    </button>
   </div>
  </div>
 );
};
