import axios from "axios";
import { createContext, useState } from "react";

export const CovidContext = createContext();

const CovidContextProvider = ({ children }) => {
  const [covid, setCovid] = useState([]);
  const [error, seterror] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    let data = {
      country: e.target.country.value,
      fromDate: e.target.fromDate.value,
      toDate: e.target.toDate.value,
    };

    axios
      .get(
        `https://api.covid19api.com/country/${data.country}/status/confirmed?from=${data.fromDate}&to=${data.toDate}`
      )
      .then((resolve) =>{
        setCovid(resolve.data)
        seterror('')
      } 
      )
      .catch((rejected) => seterror('No Data try to explore another country!'));
  };

  const value = {
    covid,
    setCovid,
    handleSearch,
    error
  };

  return (
    <CovidContext.Provider value={value}>{children}</CovidContext.Provider>
  );
};

export default CovidContextProvider;
