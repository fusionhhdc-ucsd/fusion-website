'use strict';

class EventsUpcoming extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div
        className="container"
        style={{
          'width': '70%'
        }}
      >
        <h2
          className='text-center'
        >
          Upcoming Events
        </h2>
        <div className="d-inline">
          <EventCard
            title="FUSION XIX Kickoff"
            day="Sat"
            date="03/03"
            location="La Jolla, CA, US"
            description="Come support the exciting dancers that UCSD has to offer!"
          />
          <EventCard
            title="FUSION XIX"
            day="Sat"
            date="04/20"
            location="San Diego, CA, US"
            description="Come see amazing dance performances!"
          />
        </div>
      </div>
    );
  }
}