import React, { useState, useEffect } from "react";
// import { robots } from "./robots";
import Scroll from "../Components/Scroll";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Errorboundary from "../Components/Errorboundary";
import "./App.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  //Setting Up the hooks
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((user) => this.setState({ robots: user }));
  // }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setRobots(user));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <Errorboundary>
          <CardList robots={filteredRobots} />
        </Errorboundary>
      </Scroll>
    </div>
  );
}

export default App;
