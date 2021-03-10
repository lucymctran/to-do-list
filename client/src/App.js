import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./components/ToDoList.js";
import TextSubmission from "./components/TextSubmission.js";

const App = () => {
  const [post, setPost] = useState("");
  const [list, setList] = useState([]);

  const handlePost = (post) => {
    axios.post("/post", { post }).then(setPost(post));
  };

  const handleDelete = (postID) => {
    axios.post("/delete", { postID }).then(setPost(postID));
  };

  useEffect(() => {
    axios.get("/entirelist").then((response) => {
      setList(response.data);
    });
  }, [post]);

  return (
    <div className="ui center aligned container">
      <h1>To-Do List</h1>
      <div className="ui grid">
        <div className="row">
          <div className="column">
            <TextSubmission toTransfer={handlePost} />
          </div>
        </div>
        <div className="row">
          <div className="column"></div>
        </div>
        <div className="row">
          <div className="column">
            <List list={list} toTransfer={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
