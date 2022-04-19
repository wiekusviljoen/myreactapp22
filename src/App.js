import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./pages/AboutView";

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Home />
      <AboutView />
    </div>
  );
}

export default App;
