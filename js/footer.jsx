'use strict';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <footer class="py-5">
        <div class="text-center center-block">
          <SocialMediaBar/>
        </div>
      </footer>
    );
  }
}

