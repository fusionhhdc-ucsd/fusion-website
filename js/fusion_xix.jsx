'use strict';

class FusionXIX extends React.Component {
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
const dom_container = document.querySelector('#fusion-xix-container');
ReactDOM.render(<FusionXIX/>, dom_container);