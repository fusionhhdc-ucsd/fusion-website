'use strict';

class Judges extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>
          Judges
        </h2>
        <Judge
          image="/images/judges/judge-kenya-clay.png"
          graphicAltText="Kenya Clay"
        />
        <Judge
          image="/images/judges/judge-dea-nguyen.png"
          graphicAltText="Kenya Clay"
        />
        <Judge
          image="/images/judges/judge-kevin-nguyen.png"
          graphicAltText="Kenya Clay"
        />

      </div>
      
    );
  }
}