import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./assets/cssreset.css";
import "./assets/global.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import Airport from "./pages/Airport";
import About from "./pages/About";
import Footer from "./components/Footer";

const DOMAIN = process.env.DOMAIN;

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");

  const submitSearch = (query) => {
    if (!query) return console.log("Query empty");
    axios.get(`${DOMAIN}api/search/${query}`).then((res) => {
      setSearchResults(res.data);
      setCurrentSearch(query);
    });
  };

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <>
      <Header />
      <Router>
        <Navigation />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <HomePage submit={submitSearch} />}
          />
          <Route
            path="/search"
            exact
            component={() => (
              <SearchResults
                search={currentSearch}
                submit={submitSearch}
                results={searchResults}
              />
            )}
          />
          <Route path="/airport/:id" component={() => <Airport />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
