import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Transport from "./components/Transport";
import { Switch, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ca2a714966e558e6611341224c92c0ab&language=en-US&query=${searchText}page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/contact" component={Contact} />
        <Route path="/transport" component={Transport} />
        <Route path="/services" component={Services} />
        <SearchView keyword={searchText} searchResults={searchResults} />
      </Switch>
    </div>
  );
}

export default App;
