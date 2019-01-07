'use strict';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="/index.html">FUSION</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/staff.html">Our Staff</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/fusion_xix.html">
                FUSION XIX
              </a>
            </li>
          </ul>
        </div> 
      </nav>
    );
  }
}