'use strict';

class EventInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>
          {this.props.title}
        </h2>
        <p>
          {this.props.description}
        </p>
        <p className="font-weight-bold" >
          This year’s event info:
        </p>
        <ul>
          <ListTextElements
            infoTexts={this.props.infoTexts}
          />
          <li>
            Location:&nbsp;
            <a
              href={this.props.locationUrl}
              target="_blank"
            >
              {this.props.location}
            </a>
          </li>
        </ul>
      </div>
      
    );
  }
}