'use strict';

class Kickoff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const infoTexts = [
      "Date: Sunday, March 3rd",
      "Time: 7:00 PM (Need official time.)"
    ];

    return (
      <div>
        <NavBar/>
        <Banner/>

        <div className="container w-75" >
          <EventInfo
            title="FUSION XIX Kickoff"
            location="Price Center West Ballroom (Floor 2)"
            locationUrl="http://universitycenters.ucsd.edu/aboutus_directions.php"
            infoTexts={infoTexts}
            description="An annual dance showcase for UC San Diego students and
              dance teams."
          />
          <LineUp />
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#kickoff-container');
ReactDOM.render(<Kickoff/>, dom_container);