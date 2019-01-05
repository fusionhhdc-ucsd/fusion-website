'use strict';

class SocialMediaBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="social_media_bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <SocialMedia
                href="http://www.facebook.com/fusionhhdc"
                company="facebook"
              />
            </div>
            <div className="col">
              <SocialMedia
                href="https://instagram.com/fusionhiphop"
                company="instagram"
                square={false}
              />
            </div>
            <div className="col">
              <SocialMedia
                href="http://twitter.com/fusionhiphop?lang=en"
                company="twitter"
              />
            </div>
            <div className="col">
              <SocialMedia
                href="http://www.youtube.com/channel/UCCbFcX7YCu-4NWZNuPEFggw"
                company="youtube"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}