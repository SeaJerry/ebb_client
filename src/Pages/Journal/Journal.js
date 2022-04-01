import React from "react";
import "./Journal.css";
import * as FaIcons from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext} from "react";
import { Context } from "../../Context/Context";


const Journal = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {user} = useContext(Context);

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://murmuring-inlet-81483.herokuapp.com//posts/${id}`, {
        data: { username: user.username },
      });
      window.location.replace("https://seajerry.github.io/ebb_client/#/Journal");
    } catch (err) {}
  };


  
  // const handleDelete = async (id) => {
  //   await axios.delete(`https://murmuring-inlet-81483.herokuapp.com/posts/${id}`)
  //   .then((res) =>
  //   console.log("Deleted", res).catch((error) => console.log(error)))
  // }

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

                      <FaIcons.FaTrash className="delete-btn" onClick={() => handleDelete(item._id)} />
    
                  
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


