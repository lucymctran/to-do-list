import React, { useState } from "react";
import axios from "axios";

const TextSubmission = (props) => {
  // const { toPost } = props;
  const { toTransfer } = props;
  const [post, setPost] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // toPost(post);
    axios.post("/post", { post });
    setPost([]);
    handleTransfer();
  };

  const handleTransfer = () => {
    axios.get("/entirelist").then((response) => {
      toTransfer(response.data);
    });
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
              console.log(e.target.value);
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
