'use strict';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <footer className="py-5">
        <div className="text-center center-block">
          <Sponsors />
          <SocialMediaBar/>
        </div>
        <div className="text-center">
          {"Contact us by emailing "}
          <a
            href="mailto:fusionhhdc.marketing@gmail.com"
            target="_top"
          >
            fusionhhdc.comm@gmail.com
          </a>
        </div>
      </footer>
    );
  }
}

