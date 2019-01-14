'use strict';

class Winner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li className="mb-5" >
        <h5>
          {this.props.title}
        </h5>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe 
            src={this.props.videoUrl}
            allow="
              accelerometer;
              autoplay;
              encrypted-media;
              gyroscope;
              picture-in-picture"
            allowFullScreen >
          </iframe>
        </div>
      </li>
    );
  }
}