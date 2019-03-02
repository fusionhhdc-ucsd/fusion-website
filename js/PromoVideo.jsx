'use strict';

class PromoVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
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
      </div>
      
    );
  }
}