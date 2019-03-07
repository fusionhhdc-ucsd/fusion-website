'use strict';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar/>
        <Banner/>
        <h1
          className='text-center'
          style={{
            marginBottom: '1em'
          }}
        >
          Welcome to the FUSION Hip-Hop Dance Competition website!
        </h1>
        <EventsUpcoming/>
        <ButtonTicket/>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#index-container');
ReactDOM.render(<Index/>, dom_container);