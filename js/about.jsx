'use strict';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar/>
        <Banner/>
        <MissionStatement/>
        <AboutStatement/>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#about-container');
ReactDOM.render(<About/>, dom_container);