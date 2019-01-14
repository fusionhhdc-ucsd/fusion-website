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
        <div className="container w-75" >
          <MissionStatement/>
          <AboutStatement/>
          <HistoryTimeline/>
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#about-container');
ReactDOM.render(<About/>, dom_container);