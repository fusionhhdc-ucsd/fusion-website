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
        <div className="container w-75" >
          <h1>
            FUSION XIX Kickoff
          </h1>
          <p>
            An annual dance showcase for UC San Diego students and dance teams.
          </p>
          <p className="font-weight-bold" >
            This year’s event info:
          </p>
          <ul>
            <li>
              Date: Sunday, March 3rd
            </li>
            <li>
              Time: 7:00 PM (Need official time.)
            </li>
            <li>
              Location:&nbsp;
              <a
                href="http://universitycenters.ucsd.edu/aboutus_directions.php"
              >
                Price Center West Ballroom (Floor 2)
              </a>
            </li>
          </ul>
          <h1>
            Line Up
          </h1>
          <p>
            To be announced...
          </p>
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#kickoff-container');
ReactDOM.render(<Kickoff/>, dom_container);