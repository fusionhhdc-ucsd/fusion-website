'use strict';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>
          Sponsors
        </h2>
        <Sponsor
          image="/images/sponsors/sponsor-calpico.jpeg"
          graphicAltText="Calpico"
        />
        <Sponsor
          image="/images/sponsors/sponsor-culture-shock-dance-center.jpg"
          graphicAltText="Culture Shock Dance Center"
        />
        <Sponsor
          image="/images/sponsors/sponsor-dancehouse.png"
          graphicAltText="Dance House"
        />
        <Sponsor
          image="/images/sponsors/sponsor-passion-planner.png"
          graphicAltText="Passion Planner"
        />
        <Sponsor
          image="/images/sponsors/sponsor-puravida.png"
          graphicAltText="Puravida"
        />
        <Sponsor
          image="/images/sponsors/sponsor-rockstar.png"
          graphicAltText="Rockstar"
        />

      </div>
      
    );
  }
}