'use strict';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a
          className="navbar-brand"
          href="/index.html"
        >
          FUSION
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <NavItem
              title="Home"
              url="/index.html"
            />
            <NavItem
              title="About"
              url="/about.html"
            />
            <NavItemDropdown
              title="Events"
              dropdownTitle0="FUSION XIX Kickoff"
              url0="/kickoff.html"
              dropdownTitle1="FUSION XIX"
              url1="/competition.html"
            />
            <NavItem
              title="Apply"
              url="/apply.html"
            />
            <NavItem
              title="Our Staff"
              url="/staff.html"
            />
            <NavItem
              title="Contact"
              url="/contact.html"
            />
          </ul>
        </div> 
      </nav>
    );
  }
}