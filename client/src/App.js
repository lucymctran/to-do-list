import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./components/ToDoList.js";
import TextSubmission from "./components/TextSubmission.js";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("/entirelist").then((response) => {
      setList(response.data);
    });
  }, []);

  // const toDoList = ["What do I need to do today?"];

  // const handlePost = (post) => {
  //   setList(list.concat(post));
  // };

  const handlePost = (post) => {
    setList(post);
  };

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
            <List list={list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
