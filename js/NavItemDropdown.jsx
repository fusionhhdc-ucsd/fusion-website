'use strict';

class NavItemDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.title}
        </a>
        <div
          className="dropdown-menu"
          aria-labelledby="navbarDropdown"
        >
          <a
            className="dropdown-item" 
            href={this.props.url0}
          >
            {this.props.dropdownTitle0}
          </a>
          <a
            className="dropdown-item" 
            href={this.props.url1}
          >
            {this.props.dropdownTitle1}
          </a>
        </div>
      </li>
    );
  }
}