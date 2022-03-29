import React from "react";
import "./Write.css";

const Write = () => {
  return (
    <section className="main-container">
      <div className="write-container">
        <form className="write-form">
          <div className="write-form-group">
            <input className="write-inpt" type="text" placeholder="Image URL" />
          </div>
          <div className="write-form-group">
            <input className="write-inpt" type="text" placeholder="Title" />
          </div>
          <div className="content-container">
            <textarea
              placeholder="Share Your Story"
              id="content"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Write;
