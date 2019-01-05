'use strict';

class EventCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="card border-dark mb-3 mx-auto"
        style={{
          'max-width': '18rem'
        }}
      >
        <div className="card-body text-dark">
          <div className="card-text">
            <span
              style={{
                'color': '#2670f9'
              }}
            >
              {this.props.day}&nbsp;
              <span className="font-weight-bold">
                {this.props.date}
              </span>
            </span>
            

            <div
              className="text-right float-right"
              style={{
                'color': '#ababab'
              }}
            >
              {this.props.location}
            </div>
          </div>
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">
            {this.props.description}
          </p>
        </div>
      </div>
      
    );
  }
}