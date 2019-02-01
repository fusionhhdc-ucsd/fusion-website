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
            location="TBA"
            locationUrl="https://www.google.com/maps?q=san+diego&um=1&ie=UTF-8&sa=X&ved=0ahUKEwie6t6p25vgAhWlMX0KHexTDSUQ_AUIDigB"
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