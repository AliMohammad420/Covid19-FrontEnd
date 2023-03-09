import React, { useContext } from "react";
import { CovidContext } from "../context/CovidContext";

export const StaticsCountry = () => {
    const {handleSearch} = useContext(CovidContext);
    return (
    <div className="homeContainer">
      <h3 className="country-heading">Get Statics for a specific country</h3>
      <div className="from-container">
        <form className="country-form" onSubmit={handleSearch}>
          <input required className="text-input" id='country' type="text" placeholder="Country" />
          <input required className="text-input" id="fromDate" type="date" />
          <input required className="text-input" id='toDate' type="date" />
          <button className="search-country">Search</button>
        </form>
      </div>
    </div>
  );
};
