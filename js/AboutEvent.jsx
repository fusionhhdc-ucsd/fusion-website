'use strict';

class AboutEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h5 className="mb-0" >
          {this.props.title}
        </h5>
        <p className="mb-0" >
          {this.props.description}
        </p>
        <ul>
          <li>
            Date: {this.props.date}
          </li>
          <li>
            Location: {this.props.location}
          </li>
        </ul>
      </div>
    );
  }
}