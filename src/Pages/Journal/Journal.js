import React from "react";
import "./Journal.css";
import { useState, useEffect } from "react";
import axios from "axios";


const Journal = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3000/posts/"
        );

        setData(response.data);
        
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(data.length)
  const listItem = data.map((item) => {

    return (
      <h1>{item.title}</h1>
    )
    
    })


  return (
    <div>
    <h2 className="title">Doing stuff with data</h2>
    {listItem}
  </div>
  );
};

export default Journal;
