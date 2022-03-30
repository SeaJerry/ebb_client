import React from "react";
import "./Journal.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Journal = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://murmuring-inlet-81483.herokuapp.com/posts/");

        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(data.length);

  const listItem = data.map((item, index) => {
    return (
      <div className="main-journal-container">
        <div className="journal">
            <div className="journal_wrapper">
              <ul className="journal-container">
                <li className="journal_item">
                  <figure className="journal_item_pic-wrap">
                    <img
                      className="journal_item_img"
                      alt="Travel"
                      src={item.photo}
                    />
                  </figure>
                  <div className="journal_item_info">
                    <h2 className="journal_item_title"> {item.title}</h2>
                    <h5 className="journal_item_text">{item.description}</h5>
                  </div>
                  <h6 className="journal_item_username">Author: {item.username}</h6>
                  <h6 className="journal_item_username">Published: {item.createdAt}</h6>
                </li>
              </ul>
            </div>
        </div>

      </div>
    );
  });

  return (
    <>
      {listItem}
    </>
  );
};

export default Journal;


