'use strict';

class WinnersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>
          FUSION XVIII 2018 Winners
        </h2>
        <ul className="list-unstyled" >
          <Winner
            title="1st Place: Syndicate"
            videoUrl="https://www.youtube.com/embed/ublLxPlMb7g"
          />
          <Winner
            title="2nd Place: Common Ground"
            videoUrl="https://www.youtube.com/embed/mtwWYRQAgX4"
          />
          <Winner
            title="3rd Place: The G.O.O.D. PROJECT"
            videoUrl="https://www.youtube.com/embed/FBwpq9_JSJI"
          />
        </ul>
      </div>
    );
  }
}