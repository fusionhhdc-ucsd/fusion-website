'use strict';

class AboutStatement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>About</h2>
        <p>
          FUSION Hip Hop Dance Competition is a fully student-run branch of the
          Multi-Asian Student Association (MASA) that organizes, promotes, and
          runs dance events in the greater San Diego area. We host two large
          events annually:
        </p>
        <AboutEvent
          title="FUSION XIX Kickoff"
          date="Sunday, March 3rd"
          location="Price Center West Ballroom"
          description="An annual dance showcase for UC San Diego students and dance
            teams."
        />
        <AboutEvent
          title="FUSION XIX Hip Hop Dance Competition"
          date="Saturday, April 20th"
          location="Golden Hall"
          description="One of the largest dance competitions on the West
            Coast."
        />
      </div>
      
    );
  }
}