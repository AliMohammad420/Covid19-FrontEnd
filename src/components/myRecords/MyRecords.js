import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyRecord.css";

export const MyRecords = () => {
  const [records, setRecords] = useState([]);
  const Swal = require('sweetalert2')

  const deleteRecords = (id) => {
    axios.delete(`${process.env.REACT_BACKEND_URL}/covid/${id}`).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Deleted from your records!",
        showConfirmButton: false,
        timer: 1500,
      });
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_BACKEND_URL}/covid`);
      setRecords(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="recordContainer">
      <h2 className="record-heading">COVID19 Statics for All Countries</h2>
      <div className="recordsCard">
        {records.length ? 
        records?.map((record) => {
          return (
            <div key={record.id} className="recordCard-container">
              <div className="lineColor">''</div>
              <div className="dataContainer">
                <label className="record-label">
                  Country: {record.country}
                </label>
                <label className="date-label">Date: {record.date}</label>
                <button
                  className="delete-btn"
                  onClick={() => deleteRecords(record.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        }):
        <label className="unavailable">No Available Records ¯ \ _ (ツ) _ / ¯ </label>
        }
      </div>
    </div>
  );
};
