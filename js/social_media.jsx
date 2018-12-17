'use strict';

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  static to_class(company){
    return `fab fa-${company}-square fa-5x`;
  }

  render() {

    return (
      <a href={this.props.href}>
        <i className={SocialMedia.to_class(this.props.company)}></i>
      </a>
    );
  }
}