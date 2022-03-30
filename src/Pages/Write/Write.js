import React from "react";
import "./Write.css";
import { useState } from "react";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username,
      title,
      description,
      photo,
    };

    try {
      const response = await axios.post("https://murmuring-inlet-81483.herokuapp.com/posts", newPost);
      response.data && window.location.replace("/#/Journal");
      console.log(response);
    } catch (error) {
      console.log("Oops, Something Went Wrong");
    }
  };

  return (
    <section className="main-container">
      <div className="write-container">
        <form className="write-form" onSubmit={handleSubmit}>
          <div className="write-form-group">
            <input
              className="write-inpt"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="write-form-group">
            <input
              className="write-inpt"
              type="text"
              placeholder="Image URL"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="write-form-group">
            <input
              className="write-inpt"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="content-container">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Share Your Story"
              type="text"
              id="content"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            Publish
          </button>
        </form>
      </div>
    </section>
  );
};

export default Write;


