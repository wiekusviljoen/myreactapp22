import { useHistory } from "react-router-dom";
const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();
  const updateSearchText = (e) => {
    history.push(`/search`);
    setSearchText(e.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href className="navbar-brand" to="/">
          Movie Browser
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="gotosomewhere navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <a href="/">
              <button type="button" class="button">
                Home
              </button>
            </a>

            <a href="/about">
              <button type="button" class="button1">
                About
              </button>
            </a>

            <a href="/">
              <button type="button" class="button2">
                Coming Soon
              </button>
            </a>

            <li className="nav-item"></li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
          </form>
          <a href="/search">
            <button type="submit" class="searchbutton">
              Search
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
