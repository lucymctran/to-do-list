import React, { useState, useEffect } from "react";
import axios from "axios";

const TextSubmission = (props) => {
  const { toTransfer } = props;
  const [post, setPost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    toTransfer(post);
    setPost("");
  };

  return (
    <form className="ui form">
      <div className="field">
        <div className="ui fluid action input">
          <input
            type="text"
            placeholder="Enter entry"
            value={post}
            onChange={(e) => {
              setPost(e.target.value);
            }}
          />
          <button
            className="ui pink button"
            type="submit"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default TextSubmission;
