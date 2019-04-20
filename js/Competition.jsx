'use strict';

class Competition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const infoTexts = [
      "FUSION Dance Competition (FUSION XIX)",
      "Date: April 20th, 2019",
      "Time: 5:00 PM - 10:00 PM",
      "Doors open at 5:00 PM. Show starts at 6:00 PM"
    ];

    return (
      <div>
        <NavBar/>
        <Banner/>
        <div className="container w-75" >
          <EventInfoFacebookEventLink
            title="FUSION XIX"
            location="Golden Hall"
            locationUrl="https://goo.gl/maps/EFxJNaadGu82"
            facebookEventUrl="https://www.facebook.com/events/2314411585459623"
            infoTexts={infoTexts}
            description="One of the largest dance competitions on the West
              Coast."
          />
          <ButtonTicket />
          <LineUpGraphic
            image="/images/competition/lineup-competition.png"
            graphicAltText="Competition Lineup"
            graphicDesigner="Desiree Intveld"
          />
          <MasterOfCeremonies
            image="/images/master-of-ceremonies/master-of-ceremonies-mikey-dellavella.png"
            graphicAltText="Master of Ceremonies"
          />
          <Judges />
          <WinnersList />
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#competition-container');
ReactDOM.render(<Competition />, dom_container);