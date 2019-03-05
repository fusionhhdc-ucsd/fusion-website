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
            title="FUSION XIX"
            day="Sat"
            date="04/20"
            location="San Diego, CA, US"
            eventUrl="competition.html"
            description="Come see amazing dance performances!"
          />
        </div>
      </div>
    );
  }
}