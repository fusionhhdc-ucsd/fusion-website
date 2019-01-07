'use strict';

class Committee extends React.Component {
  constructor(props) {
    super(props);
  }

  static to_url(staff_team, size){
    return `/images/staff/fusion-xviii-staff-${size}-${staff_team}.jpg`;
  }

  render() {

    return (
      <div>
        <div className="card">
          <h4 className="card-title text-center">{this.props.title}</h4>
          <img
            className="card-img-top"
            src={Committee.to_url(this.props.image, this.props.size)}
            alt="Card image"
          />
          <div className="card-body">
            
            <p className="card-text">{this.props.description}</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    );
  }
}

Committee.defaultProps = {
  image: 'welcoming',
  size: 'sm'
};