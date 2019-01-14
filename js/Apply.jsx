'use strict';

class Apply extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  // &nbsp; means a single non-breaking space.
    return (
      <div>
        <NavBar/>
        <Banner/>
        <h1 className="text-center">
          Applications are now closed for FUSION XIX Hip Hop Dance Competition.
          Please come back in December 2019 for FUSION XX applications! We also
          post our applications on our Facebook &nbsp;
            <a
              href="http://www.facebook.com/fusionhhdc"
            >
            page
            </a>.
        </h1>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#apply-container');
ReactDOM.render(<Apply/>, dom_container);