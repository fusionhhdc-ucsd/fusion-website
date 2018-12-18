'use strict';

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  to_class(){
    if(this.props.square){
      return `fab fa-${this.props.company}-square fa-5x`;
    } else {
      return `fab fa-${this.props.company} fa-5x`;
    }
    
  }

  render() {

    return (
      <a href={this.props.href}>
        <i className={this.to_class() + " social_media"}></i>
      </a>
    );
  }
}

SocialMedia.defaultProps = {
  square: true
};