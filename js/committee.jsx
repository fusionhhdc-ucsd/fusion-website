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
      <li>
        <h3>{this.props.title}</h3>
        <img className="img-fluid" src={Committee.to_url(this.props.image)}/>
        <p>
          {this.props.description}
        </p>
      </li>
    );
  }
}

Committee.defaultProps = {
  image: 'welcoming'
};