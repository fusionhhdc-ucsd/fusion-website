'use strict';

class Competition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const infoTexts = [
      "FUSION Dance Competition (FUSION XIX)",
      "Date: April 20th, 2019",
      "Time: 5:00 PM"
    ];

    return (
      <div>
        <NavBar/>
        <Banner/>
        <div className="container w-75" >
          <EventInfo
            title="FUSION XIX"
            location="Golden Hall"
            locationUrl="https://www.google.com/maps/place/Golden+Hall/@32.717645,-117.163323,16z/data=!4m5!3m4!1s0x0:0x64836d4d79a1c138!8m2!3d32.7176451!4d-117.163323?hl=en-US"
            infoTexts={infoTexts}
            description="One of the largest dance competitions on the West
              Coast."
          />
          <WinnersList />
          <LineUp />
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#competition-container');
ReactDOM.render(<Competition />, dom_container);