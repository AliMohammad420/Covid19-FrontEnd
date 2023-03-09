import React, { useEffect, useState } from "react";
import { AllCountriesCard } from "./AllCountriesCard";
import "./AllCountries.css";
import axios from "axios";

export const AllCountries = () => {
  const [summery, setSummery] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        setSummery(res.data.Countries);
      })
  }, []);

  
  return (
    <div className="main">
      <h2 className="statics-heading">COVID19 Statics for All countries</h2>
      <div className="summeryCard">
        {summery?.length ? (
          summery.map((item, index) => (
            <AllCountriesCard
              key={index}
              country={item.Country}
              cases={item.TotalConfirmed}
              death={item.TotalDeaths}
              recovered={item.TotalRecovered}
              date={item.Date}
            />
          ))
        ) : (
          <label className="waitingmsg">Getting data!</label>
        )}
      </div>
    </div>
  );
};
