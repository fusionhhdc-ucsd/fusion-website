'use strict';

class Kickoff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar/>
        <Banner/>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#kickoff-container');
ReactDOM.render(<Kickoff/>, dom_container);