'use strict';

class Competition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar/>
        <Banner/>
        <div className="container w-50" >
          <h1>
            FUSION XIX
          </h1>
          <p className="font-weight-bold" >
            This year’s event info:
          </p>
          <ul>
            <li>
              FUSION Dance Competition (FUSION XIX)
            </li>
            <li>
              Date: April 20th, 2019
            </li>
            <li>
              Location:&nbsp;
              <a
                href="https://www.google.com/maps/place/Golden+Hall/@32.717645,-117.163323,16z/data=!4m5!3m4!1s0x0:0x64836d4d79a1c138!8m2!3d32.7176451!4d-117.163323?hl=en-US"
              >
                Golden Hall
              </a>
            </li>
          </ul>
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#competition-container');
ReactDOM.render(<Competition />, dom_container);