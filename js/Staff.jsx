'use strict';

class Staff extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <NavBar/>
        <Banner/>
        <CommitteeList/>
        <Footer/>
      </div>
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#staff-container');
ReactDOM.render(<Staff/>, dom_container);