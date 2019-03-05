'use strict';

class EventCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="card border-dark mb-3 mx-auto"
        style={{
          'maxWidth': '18rem'
        }}
      >
        <div className="card-body text-dark">
          <div className="card-text">
            <div className="container">
              <div className="row">
                <div
                  className='col-sm text-left px-0'
                  style={{
                    'color': '#2670f9'
                  }}
                >
                  {this.props.day}&nbsp;
                  <span className="font-weight-bold">
                    {this.props.date}
                  </span>
                </div>
                

                <div
                  className="col-sm text-sm-right px-0"
                  style={{
                    'color': '#ababab'
                  }}
                >
                  {this.props.location}
                </div>
              </div>
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