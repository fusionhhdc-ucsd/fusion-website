'use strict';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li className="nav-item">
        <a
          className="nav-link"
          href={this.props.url}
        >
          {this.props.title}
        </a>
      </li>
    );
  }
}