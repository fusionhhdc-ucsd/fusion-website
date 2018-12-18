'use strict';

class Committee extends React.Component {
  constructor(props) {
    super(props);
  }

  static to_url(staff_team){
    return `/images/staff/fusion-xviii-staff-${staff_team}.jpg`;
  }

  render() {

    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={Committee.to_url(this.props.image)} alt="Card image"/>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.description}</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    );
  }
}

Committee.defaultProps = {
  image: 'welcoming'
};