import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Switch, Route } from "react-router-dom";
import SearchView from "./components/SearchView";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search" component={SearchView} />
      </Switch>
    </div>
  );
}

export default App;
