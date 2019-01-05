'use strict';

class SocialMediaBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="social_media_bar">
          <SocialMedia
            href="http://www.facebook.com/fusionhhdc"
            company="facebook"
          />
          <SocialMedia
            href="https://instagram.com/fusionhiphop"
            company="instagram"
            square={false}
          />
          <SocialMedia
            href="http://twitter.com/fusionhiphop?lang=en"
            company="twitter"
          />
          <SocialMedia
            href="http://www.youtube.com/channel/UCCbFcX7YCu-4NWZNuPEFggw"
            company="youtube"
          />
      </div>
    );
  }
}