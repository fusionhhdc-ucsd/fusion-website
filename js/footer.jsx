'use strict';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <footer className="py-5">
        <div className="text-center center-block">
          <SocialMediaBar/>
        </div>
      </footer>
    );
  }
}

