const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1 type="h1" class="h1">
          FrogIns Transport
        </h1>

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
            <a href="/transport">
              <button type="button" class="button2">
                Transport
              </button>
            </a>

            <a href="/products">
              <button type="button" class="button4">
                Products
              </button>
            </a>

            <a href="/about">
              <button type="button" class="button1">
                About Us
              </button>
            </a>

            <a href="/contact">
              <button type="button" class="button3">
                Contact us
              </button>
            </a>

            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
